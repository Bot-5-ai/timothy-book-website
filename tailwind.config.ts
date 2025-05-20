
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'merriweather': ['Merriweather', 'serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'cinzel': ['Cinzel', 'serif'],
				'medieval': ['Metamorphous', 'cursive'],
				'source-code': ['Source Code Pro', 'monospace'],
				'serif': ['Playfair Display', 'Georgia', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'cabin': ['Cabin', 'sans-serif'], // Add Cabin font for rugged, outdoorsy feel
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				bookblue: {
					100: '#E6F0FF',
					200: '#B3D1FF',
					300: '#80B3FF', 
					400: '#4D94FF',
					500: '#1A75FF', // primary blue
					600: '#0052cc',
					700: '#003d99',
					800: '#002966',
					900: '#001433',
				},
				// Medieval theme colors
				medieval: {
					dark: '#1a1407',
					'dark-alt': '#241e11',
					gold: 'rgb(212, 175, 55)',
					light: '#f0e6d2',
					parchment: '#f5e8c9',
					red: '#8b0000',
				},
				// Added vibrant color palette
				vibrant: {
					pink: '#FF6B6B',
					orange: '#FFA07A',
					yellow: '#FFD700',
					green: '#00FA9A',
					teal: '#00F2FE',
					cyan: '#4FACFE',
					purple: '#8B5CF6',
					magenta: '#D946EF',
				},
				// Survival theme colors
				survival: {
					moss: '#2c4c3b',
					bark: '#5c4033',
					stone: '#708090',
					leaf: '#a3c9a8',
					earth: '#8b4513',
					gold: '#e9b872',
					water: '#1e90ff',
					night: '#0a1510',
					fire: '#ff7f50',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-light': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'dragon-flight': {
					'0%': { transform: 'translate(-100%, 0) rotate(5deg)' },
					'50%': { transform: 'translate(400%, -50px) rotate(-5deg)' },
					'100%': { transform: 'translate(1000%, 0) rotate(5deg)' },
				},
				'torch-flicker': {
					'0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 10px rgba(255, 165, 0, 0.8))' },
					'50%': { filter: 'brightness(0.8) drop-shadow(0 0 5px rgba(255, 165, 0, 0.5))' },
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink-caret': {
					'50%': { borderColor: 'transparent' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'zoom-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'rotate-y': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'float-delayed': 'float 8s ease-in-out infinite',
				'pulse-light': 'pulse-light 2s ease-in-out infinite',
				'dragon-flight': 'dragon-flight 30s ease-in-out infinite',
				'torch-flicker': 'torch-flicker 3s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'blink-caret': 'blink-caret 0.75s step-end infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'zoom-in': 'zoom-in 0.5s ease-out',
				'rotate-y': 'rotate-y 8s linear infinite'
			},
			boxShadow: {
				'glow': '0 0 15px rgba(255, 255, 255, 0.5)',
				'glow-blue': '0 0 20px rgba(56, 189, 248, 0.7)',
				'glow-purple': '0 0 20px rgba(139, 92, 246, 0.7)',
				'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.7)',
				'glow-gold': '0 0 20px rgba(212, 175, 55, 0.7)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
