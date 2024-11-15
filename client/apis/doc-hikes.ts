import request from 'superagent'
import { TracksByRegion, TrackDetails } from '../../models/trackDetails'
import { Huts } from '../../models/huts'

// function to get all hikes
export async function getTracks(): Promise<TrackDetails[]> {

    // a get request to the api endpoint to fetch all tracks
  const response = await request.get(`/api/v1/tracks`) 

  if (!response) {
  console.error('The tracks data could not be accessed at this time')
  }
  console.log('API response:', response.body)
  return response.body 

}

// function to get hikes by region and assetId, returns an array of track details
export async function getTrackById( assetId: string): Promise<TrackDetails> {

  // a get request to get a specific hike within a region, containing the assetId to reach a specifc hike
  const response = await request.get(`/api/v1/tracks/${assetId}/detail`) 

  if (!response) {
  console.error('The tracks data could not be accessed at this time')
  }
  console.log('API response:', response.body)
  return response.body
}


// function to get hikes based on specifc region
export async function getTracksByRegion(region: string): Promise<TracksByRegion[]> {
    // a get request to the api endpoint to fetch regions
  const response = await request.get(`/api/v1/tracks/region/${region}`) 

  if (!response) {
  console.error('The huts data could not be accessed at this time')
  }
  return response.body 
}

// function to fetch huts from the database, returns an array of hut objects 
export async function loadHuts(): Promise<Huts[]> {

  const response = await fetch('../data/data.json')

  if (!response) {
    console.error('Failed to load huts data')
  }

  // parse the json response to extract the data 
  const hutsData = await response.json()
  const data = JSON.parse(hutsData)
  return data.huts
}


