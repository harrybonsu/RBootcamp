from splinter import Browser
import requests
from bs4 import BeautifulSoup as bs
from pprint import pprint
import pandas as pd

#taken from activity #9 Day 3
def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "chromedriver"}
    return Browser("chrome", **executable_path, headless=False)


mars_web = {}
hemisphere_image_urls = []
# #news scrape
def scrape_news():
    
    browser = init_browser()
    
    #Launches Website
    url = 'https://redplanetscience.com/'
    browser.visit(url)
    html=browser.html

    #### Sets up the Necessary Variables for the Most Recent News Article.
    #need to get a variable for 'news_title' and 'news_p'
    soup = bs(html, 'html.parser')
    news_titles = soup.find('div', class_='content_title').text
    news_para = soup.find('div', class_='article_teaser_body').text
    
    mars_web['latest_news_title'] = news_titles
    mars_web['latest_news_paragraph'] = news_para
   
    browser.quit()
    return mars_web
    
def scrape_marsImg():
    browser = init_browser()
    #### Set up Scraper for Mars Images from Images Site.
    url = 'https://spaceimages-mars.com'
    browser.visit(url)
    html=browser.html
    soup = bs(html, 'html.parser')
    #need to scrape for featured image url, variable featured_image_url
    featured_image = soup.find_all('img')[1]['src']
    featured_image_url = url + featured_image
    
    mars_web['featured_image'] = featured_image_url
    
    browser.quit()
    return mars_web
    

def scrape_marsFacts():
    browser = init_browser()
    ## Scraping Mars Facts Webpage
    url = 'https://galaxyfacts-mars.com'
    browser.visit(url)
    html=browser.html
    soup = bs(html, 'html.parser')
    tables_df = ((pd.read_html(url))[1]).rename(columns={0: "Item", 1: "Measurement"}).set_index(['Item'])
    html_table = (tables_df.to_html()).replace('\n', '')
    
    mars_web['mars_data'] = html_table
    browser.quit()
    return mars_web
        
def scrape_marsHemi1():
    browser = init_browser()
    ### Mars Hemispheres Scraping
    #cerberus url
    url = 'https://marshemispheres.com/images/full.jpg'
    browser.visit(url)
    html=browser.html
    soup = bs(html, 'html.parser')
    cerberus_url = (soup.find('div', class_='downloads').ul.li.a['href'])
    mars_web['hemisphere_urls'] = hemisphere_image_urls
    hemisphere_image_urls.append([{"title": "Cerberus Hemisphere", "img_url": cerberus_url}])
    
    browser.quit()
    return mars_web
    
def scrape_marsHemi2():
    #scrape
    #Schiaparelli Hemisphere url
    browser = init_browser()
    url = 'https://marshemispheres.com/images/schiaparelli_enhanced-full.jpg'
    browser.visit(url)
    html=browser.html
    soup = bs(html, 'html.parser')
    schiaparelli_url = (soup.find_all('div', class_='downloads').ul.li.a['href'])
    hemisphere_image_urls.append([{"title": "Schiaparelli Hemisphere", "img_url": schiaparelli_url}])

    browser.quit()
    return mars_web
    
def scrape_marsHemi3():        
    #scrape
    #Syrtis Major Hemisphere
    browser = init_browser()
    url = 'https://marshemispheres.com/images/syrtis_major_enhanced-full.jpg'
    browser.visit(url)
    html=browser.html
    soup = bs(html, 'html.parser')
    syrtis_major_url = soup.find_all('div', class_='downloads').ul.li.a['href']
    hemisphere_image_urls.append([{"title": "Syrtis Major Hemisphere", "img_url": syrtis_major_url}])

    browser.quit()
    return mars_web
        
def scrape_marsHemi4():     
    #scrape
    #Valles Marineris Hemisphere Url
    browser = init_browser()
    url = 'https://marshemispheres.com/images/valles_marineris_enhanced-full.jpg'
    browser.visit(url)
    html=browser.html
    soup = bs(html, 'html.parser')
    valles_marineries_url= (soup.find_all('div', class_='downloads').ul.li.a['href'])
    hemisphere_image_urls.append([{"title": "Valles Marineris Hemisphere", "img_url": valles_marineries_url}])

    browser.quit()
    return mars_web