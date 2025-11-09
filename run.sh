for i in {1..50}; do
  echo "Run #$i"
  pnpm playwright test
done