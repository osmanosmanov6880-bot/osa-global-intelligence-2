# Security policy

## Reporting

Do not publish secrets or exploit details in a public issue. Contact the repository owner privately through the contact channel listed on the GitHub profile.

## Current threat boundaries

This snapshot has no login, payments, database or server-side third-party API credentials. Do not add them as client-side environment variables. If authentication, research ingestion, uploads or payments are added, require server-side authorization, input validation, rate limiting, safe outbound URL handling, audit logs and provider webhook verification before launch.

The health endpoint returns only non-sensitive service metadata and uses `Cache-Control: no-store`.
