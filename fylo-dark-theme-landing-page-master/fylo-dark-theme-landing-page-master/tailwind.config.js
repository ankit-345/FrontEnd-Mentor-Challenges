/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        dark_blue_email: {
          DEFAULT: 'hsl(217, 28%, 15%)'
        },
        dark_blue_main: {
          DEFAULT: 'hsl(218, 28%, 13%)'
        },
        dark_blue_footer: {
          DEFAULT: 'hsl(216, 53%, 9%)'
        },
        dark_blue_testimonials: {
          DEFAULT: 'hsl(219, 30%, 18%)'
        },
        cyan_gradient: {
          DEFAULT: 'hsl(176, 68%, 64%)'
        },
        blue_gradient: {
          DEFAULT: 'hsl(198, 60%, 50%)'
        },
        light_red: {
          DEFAULT: 'hsl(0, 100%, 63%)'
        },
        White: {
          DEFAULT: 'hsl(0, 0%, 100%)'
        }
      },

      fontFamily: {
        Raleway: "'Raleway', sans-serif",
        Open_sans: "'Open Sans', 'sans-serif'"
      }, 

      backgroundImage: {
        'bg-curvy-desktop': "url('../images/bg-curvy-desktop.svg')",
        'bg-curvy-mobile': "url('../images/bg-curvy-mobile.svg')"
      }
    },
  },
  plugins: [],
}

