import os # Evironment variable
from dotenv import load_dotenv # Evironment Variable
import requests # API reuqests
import json # Works with JSON API data 
import pandas as pd # Working with dataframes
import plotly.express as px # Test visualization
import country_converter as coco # Converts country codes from ISO-2 to ISO-3
import numpy as np # Used to Log transform the data

def api_call():
    # Loads evironment variable from the .env file
    load_dotenv()
    api_key = os.getenv('API_KEY')
    # Defining the api-endpoint
    url = 'https://api.abuseipdb.com/api/v2/blacklist'
    # Defines parameters for API request
    querystring = {
        'confidenceMinimum':'90'
    }
    headers = {
        'Accept': 'application/json',
        'Key': api_key
    }
    # Sends the GET request to the AbuseIPDB API.
    response = requests.request(method='GET', url=url, headers=headers, params=querystring)
    # Formats the output
    data = json.loads(response.text)

    return data

def country_count(data):
    # Iterates over each entry from the blacklisted IP dump
    countries = {}
    # Counts everytime an IP originates from each country
    for entry in data['data']:
        country = entry['countryCode']
        countries[country] = countries.get(country, 0) + 1

    return countries

def format_data(data):
    # Formats data into 2 columns instead of a single line
    df = pd.DataFrame(
        list(data.items()),
        columns=['country', 'count'] 
    )
    # Converts from ISO-2 to ISO-3
    df['country'] = coco.convert(names=df['country'], src='ISO2', to='ISO3', not_found=None)
    # Log transform data to increase visibility of all countries in data set
    df["count_log"] = np.log10(df["count"] + 1)

    return df

def export_data(df):
    # Converts each row into a dictionary
    data_list = df.to_dict(orient='records')
    # Converts to JSON & Exports JSON file
    with open('data.json', 'w') as file:
        json.dump(data_list, file)

def plot_data(df):
    fig = px.choropleth(df, 
        locations='country', 
        color='count_log',
        color_continuous_scale='Blues',
        locationmode='ISO-3',
        labels={'count':'Abusive IPs'},
    )
    fig.update_traces(
        hovertemplate=(
            '<b>%{location}</b><br>'
            'Abusive IPs: %{customdata:,}<extra></extra>'
        ),
        customdata=df['count']
    )
    fig.update_layout(margin={'r':0,'t':0,'l':0,'b':0})
    fig.show()

def main():
    # API call
    ip_dump = api_call()
    # Sorts and counts IP addresses by country
    countries_dict = country_count(ip_dump)
    # Formats data for visualization
    formatted_data = format_data(countries_dict)
    # Export DataFrame to JSON
    export_data(formatted_data)
    # Test Visualization
    # plot_data(formatted_data)


if __name__ == '__main__':
    main()