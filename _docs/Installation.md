# Installation and use

## Build or re-build docker node container image
Dockerfile.node should be located in y-react folder

```bash
pwd                                                     # <- should be in ... y-react
docker system prune --all --volumes                     # <- prunes everything
docker build -f Dockerfile.node --tag 'expo_node' .     # <- builds a new docker image
```

## First time github access control
- Goto https://github.com/settings/tokens to setup _`Personal access tokens (classic)`_
- Use github username and Personal Access Token to authenticate when cloning private github repository below

## First time install on a new machine
```bash
pwd                                                     # <- should be in ... y-react
git clone https://github.com/y-core/racepro racepro
cd racepro
```

## First time dependency install
```bash
pwd                                                     # <- should be in ... y-react/racepro
pnpm install
```

## Launch docker container
```bash
docker run -it --rm -v "$PWD:/app" -e REACT_NATIVE_PACKAGER_HOSTNAME=$(ipconfig getifaddr en0) -p 8081:8081 -p 8976:8976 expo_node  # react native & deploy
docker run -it --rm -v "$PWD:/app" -e REACT_NATIVE_PACKAGER_HOSTNAME=$(ipconfig getifaddr en0) -p 3000:3000 expo_node               # wrangler localhost
```
You may need other ports mapped for some apps:
- (-p 19000:19000 -p 19006:19006) for expo
- (-p 3000:3000 -p 8787:8787 ) for wrangler

## Available aliases
```bash
start   (bun run start)             # starts metro server in development mode
prod    (bun run prod)              # starts metro server in production mode
test    (bun run test)              # runs jest tests
deploy  (bun run deploy)            # deploys srvr worker code to cloudflare
```

# Pushing changes
- Stage and commit all changes using vscode
- Exit from docker container (all git operations should be done outside docker container environment)
```bash
git pull                            # to ensure you have the latest changes
git push                            # to push changes to the github repository
```
# Deployment

## Deploying workers
```bash
pwd                                                     # <- should be in ... y-react/racepro
deploy
```

### ‼️ If not authenticated
You may receive a message:
```
Attempting to login via OAuth...
Opening a link in your default browser: ...
```
If this happens, and it does not open in your browser automatically, copy the full url and paste it in your browser url, signing in to cloudflare dashboard and approving this instance.

# Services used
## Cloudflare workers & D1 database
    https://dash.cloudflare.com/    => https://racepro.ysite.workers.dev
## Supabase authentication
    https://supabase.co             => https://tmhbxubfanvscbtkhetm.supabase.co

# Setting up cloudflared tunnel for local testing
Detailed instructions at the following links:
    https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-local-tunnel/
    https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/configure-tunnels/local-management/as-a-service/linux/

## Initial install and update the CNAME DNS record - once-off
```bash
cloudflared --config /app/.cloudflared/config.yml tunnel login

#cloudflared tunnel create <NAME>
cloudflared tunnel create racepro
cloudflared --config /app/.cloudflared/config.yml tunnel list
cloudflared --config /app/.cloudflared/config.yml tunnel info racepro

# cloudflared tunnel route dns <NAME> <hostname>
cloudflared --config /app/.cloudflared/config.yml tunnel route dns racepro race-app.com
cloudflared --config /app/.cloudflared/config.yml tunnel route ip show
```

## To run cloudflared from the command-line
```bash
cloudflared --config /app/.cloudflared/config.yml tunnel run
```

## To Install cloudflared as a service
```bash
cloudflared --config /app/.cloudflared/config.yml tunnel login
cloudflared --config /app/.cloudflared/config.yml service install
cloudflared tunnel list
service --status-all
```

## Uninstall the service
The /etc/cloudflared/config.yml file should be deleted to update config settings
```bash
cloudflared --config /app/.cloudflared/config.yml service uninstall
rm  /etc/cloudflared/config.yml
```

## Service status commands
```bash
service cloudflared start
service cloudflared stop
service --status-all
```
