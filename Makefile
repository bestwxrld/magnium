

dev:
	npm run dev

run:
	docker compose build
	docker compose up -d
	docker compose logs -f