# Deploying to Elestio

This guide will walk you through deploying your customized Lemmy UI to Elestio.

## Prerequisites

- A customized Lemmy UI codebase
- An Elestio account
- Docker installed on your local machine (for building the image)

## Building Your Docker Image

1. Build your customized Lemmy UI Docker image:

```bash
docker build -t my-custom-lemmy-ui .
```

2. Tag the image with your registry information:

```bash
docker tag my-custom-lemmy-ui your-registry.com/my-custom-lemmy-ui:latest
```

3. Push the image to your registry:

```bash
docker push your-registry.com/my-custom-lemmy-ui:latest
```

## Deploying to Elestio

### Method 1: Using the Elestio Dashboard

1. Log in to your Elestio dashboard
2. Create a new service or update an existing one
3. Select "Docker" as the deployment method
4. Enter your custom image URL: `your-registry.com/my-custom-lemmy-ui:latest`
5. Configure environment variables (see below)
6. Deploy the service

### Method 2: Using the Elestio CLI

1. Install the Elestio CLI if you haven't already
2. Log in to your Elestio account
3. Create or update a service with your custom image:

```bash
elestio service create --name lemmy-ui --image your-registry.com/my-custom-lemmy-ui:latest
```

## Environment Variables

Configure these environment variables in your Elestio service:

```
LEMMY_UI_HOST=0.0.0.0:1234
LEMMY_UI_LEMMY_INTERNAL_HOST=lemmy:8536
LEMMY_UI_LEMMY_EXTERNAL_HOST=your-domain.tld
LEMMY_UI_HTTPS=true
```

## Health Checks

Elestio uses health checks to verify your service is running properly. The Lemmy UI Dockerfile includes a health check that will:

- Check the HTTP status of your UI every 60 seconds
- Allow a 10-second start-up period
- Retry twice before marking unhealthy
- Time out after 10 seconds

## Troubleshooting

If you encounter issues with your deployment:

1. Check the Elestio logs for your service
2. Verify your environment variables are correctly set
3. Ensure your custom UI is compatible with your Lemmy backend version
4. Verify all required assets are included in your build