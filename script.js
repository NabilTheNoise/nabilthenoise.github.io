// Matrix Rain Effect
class MatrixRain {
  constructor() {
    this.canvas = document.getElementById("matrix-canvas")
    this.ctx = this.canvas.getContext("2d")
    this.chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    this.fontSize = 14
    this.columns = 0
    this.drops = []

    this.init()
    this.animate()

    window.addEventListener("resize", () => this.init())
  }

  init() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.columns = Math.floor(this.canvas.width / this.fontSize)
    this.drops = Array(this.columns).fill(1)
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.ctx.fillStyle = "#00ff41"
    this.ctx.font = `${this.fontSize}px monospace`

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.chars[Math.floor(Math.random() * this.chars.length)]
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize)

      if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0
      }
      this.drops[i]++
    }

    requestAnimationFrame(() => this.animate())
  }
}

// Initialize Matrix Rain
document.addEventListener("DOMContentLoaded", () => {
  new MatrixRain()

  // Animate skill bars on scroll
  const observeSkills = () => {
    const skillBars = document.querySelectorAll(".skill-progress")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute("data-width")
            entry.target.style.width = width + "%"
          }
        })
      },
      { threshold: 0.5 },
    )

    skillBars.forEach((bar) => observer.observe(bar))
  }

  // Smooth scrolling for navigation
  const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }

  // Typing effect for terminal content
  const typeWriter = (element, text, speed = 50) => {
    let i = 0
    element.innerHTML = ""

    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }

    type()
  }

  // Initialize animations
  observeSkills()
  smoothScroll()

  // Add glitch effect to random elements
  setInterval(() => {
    const glitchElements = document.querySelectorAll(".glitch-text")
    glitchElements.forEach((el) => {
      if (Math.random() > 0.95) {
        el.style.animation = "none"
        setTimeout(() => {
          el.style.animation = "glitch 2s infinite"
        }, 100)
      }
    })
  }, 3000)
})

// Utility function for smooth scrolling to sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Add terminal cursor effect
document.addEventListener("DOMContentLoaded", () => {
  const terminalHeaders = document.querySelectorAll(".terminal-header")
  terminalHeaders.forEach((header) => {
    const cursor = document.createElement("span")
    cursor.textContent = "_"
    cursor.style.animation = "blink 1s infinite"
    cursor.style.marginLeft = "5px"
    header.appendChild(cursor)
  })
})

// Add CSS for blinking cursor
const style = document.createElement("style")
style.textContent = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`
document.head.appendChild(style)
