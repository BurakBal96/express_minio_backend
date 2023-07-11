# Node & Express API Starter For Minio Object Storage

_"A minimally opinionated node & express starter for Minio - S3 Compatible Object Storage - "_

## Usage:

You should copy `.env.sample` to `.env` and then:

Add Minio server variables to `.env` file

`npm run dev` - Run the development server.

`npm test` - Run tests.

`npm run test:watch` - Run tests when files update.

`npm start` - Runs the server.

`npm run build` - Builds the server.

## Default endpoints:

A `GET` request to `/` will respond with Hello World

Requests to `/images` will show results of image actions like get presigned url to upload an image or get public url of an image in bucket.

Requests to `/buckets` will show results of bucket actions like create / delete buckets. Be aware of this endpoints to be protected if it will be accessed publicly.

Requests to `/bucketPolicies` will show policies of a bucket or can be updated via `POST` request. Be aware of this endpoints to be protected if it will be accessed publicly.

## Postman collection for endpoints:

Postman collection can be accessed via: [This file](Minio%20Backend.postman_collection.json)

## Example Minio docker-compose example:

```yaml
version: '3'

services:
  minio:
    container_name: minio
    command: server /data --console-address ":9001"
    environment:
      - MINIO_ROOT_USER=admin
      - MINIO_ROOT_PASSWORD=supersecret
      - MINIO_SERVER_URL=https://minio.example.com #use your own domain
      - MINIO_BROWSER_REDIRECT_URL=https://console.minio.example.com #use your own domain
    image: quay.io/minio/minio:latest
    ports:
      - '9000:9000'
      - '9001:9001'
    # Volumes are required to prevent data loss
    #volumes:
    #  - /docker/minio:/data
    restart: unless-stopped
```

## Help out

Feedback and contributions are very welcome.
