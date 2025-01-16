import { defineConfig } from 'vite'
export default defineConfig({
    base: '',
    build: {
        rollupOptions: {
            input: ["./index.html" ]//orice pagina.html o bag aici
        }
    }
})