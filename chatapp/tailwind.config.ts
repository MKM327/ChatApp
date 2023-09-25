import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-color": "#171b1d",
        "secondary-color": "#0a0e0f",
        "sent-message-color": "#48a6c3",
        "coming-message-color": "#0a0e0f",
        "text-color": "#898b8c",
        "profile-bg-color": "#252b2e",
        "profile-file-text-color": "#a6a8a9",
      },
    },
  },
  plugins: [],
}
export default config
