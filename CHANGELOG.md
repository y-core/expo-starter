# Changelog

## TODO
- Story
    - Tasks
- Implement `local` - reads data off local api location or from fake service
    - Implement error conditions for `fakeAuthService`
    - Move { eventEntries } from '~/../api/constant' to srvr fakeApi
- Implement `staging` - alternate remote workers pre-production
    - Refactor Config to include `local`, `staging`, `production`
    - Update server location for `staging`
    - Change wrangler deploy to update either the staging or the production server
        - Production should ideally be updated from github actions on checked-in code, not wrangler deployment locally
- Complete `app` user interface testing
- Complete `src` unit testing
- Complete `srvr` unit testing
- Implement Client / Server typescript validation
    - https://hono.dev/guides/rpc
    - https://zod.dev
- Implement JWT auth middleware
    - https://hono.dev/middleware/builtin/jwt
- Implement cf Worker with D1 database access using
    - https://everythingcs.dev/blog/cloudflare-d1-workers-rest-api-crud-operation/
    - https://sat0shi.dev/posts/drizzle-intro/



## DONE
start: dev => local
stage: dev => staging
test: test => local
prod: production => production

deploy: => staging
publish: => production
