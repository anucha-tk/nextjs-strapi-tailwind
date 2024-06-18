dev:
	docker compose --env-file .env.development up -d
dev-postgres-local:
	docker compose --env-file .env.development up -d postgres
stop:
	docker compose stop
down:
	docker compose --env-file .env.development down
restart:
	docker compose restart
logs:
	docker compose logs -f
run-strapi-dev:
	cd apps/strapi && yarn dev
run-nextjs-dev:
	cd apps/nextjs-tailwind && yarn dev
