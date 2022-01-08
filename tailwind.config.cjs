const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            blue: 'hsl(223, 87%, 63%)',
          },
          secondary: {
            'pale-blue': 'hsl(223, 100%, 88%)',
            'light-red': 'hsl(354, 100%, 66%)',
          },
          neutral: {
            gray: 'hsl(0, 0%, 59%)',
            'dark-blue': 'hsl(209, 33%, 12%)',
          },
        },
      },
      fontFamily: {
        'libre-franklin': ['Libre Franklin', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
