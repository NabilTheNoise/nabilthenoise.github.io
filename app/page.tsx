import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Terminal,
  Code,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="matrix-rain"></div>
      </div>

      {/* Header */}
      <header className="border-b border-green-900/50 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-green-400" />
              <span className="font-bold text-xl text-green-300 glitch-text">JOHN.DOE</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-green-300 transition-colors border border-green-900/30 px-3 py-1 hover:border-green-400/50"
              >
                [ABOUT]
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium hover:text-green-300 transition-colors border border-green-900/30 px-3 py-1 hover:border-green-400/50"
              >
                [EXPERIENCE]
              </Link>
              <Link
                href="#profiles"
                className="text-sm font-medium hover:text-green-300 transition-colors border border-green-900/30 px-3 py-1 hover:border-green-400/50"
              >
                [PROFILES]
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-green-300 transition-colors border border-green-900/30 px-3 py-1 hover:border-green-400/50"
              >
                [CONTACT]
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="relative mb-8">
            <Avatar className="w-32 h-32 mx-auto border-2 border-green-400 shadow-lg shadow-green-400/20">
              <AvatarImage
                src="/placeholder.svg?height=128&width=128"
                alt="Profile picture"
                className="filter brightness-110 contrast-125"
              />
              <AvatarFallback className="text-2xl bg-black text-green-400 border border-green-400">JD</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 w-32 h-32 mx-auto border border-green-400/30 animate-pulse"></div>
          </div>

          <div className="mb-6">
            <div className="text-green-300 text-sm mb-2 tracking-widest">INITIALIZING...</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-green-300 glitch-text">&gt; JOHN_DOE.EXE</h1>
            <div className="text-green-500 text-sm tracking-wider">STATUS: ONLINE</div>
          </div>

          <div className="bg-black/50 border border-green-900/50 p-6 mb-8 text-left max-w-2xl mx-auto">
            <div className="text-green-300 mb-2">$ cat profile.txt</div>
            <p className="text-green-400 leading-relaxed">
              Full Stack Developer & Digital Architect
              <br />
              Specializing in: Reality.exe manipulation
              <br />
              Current Mission: Creating digital experiences
              <br />
              that blur the line between code and consciousness
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-green-500 mb-8">
            <MapPin className="h-4 w-4" />
            <span className="tracking-wider">LOCATION: San Francisco, CA</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className="bg-green-900/30 text-green-300 border-green-700 hover:bg-green-800/30 px-3 py-1">
              React.js
            </Badge>
            <Badge className="bg-green-900/30 text-green-300 border-green-700 hover:bg-green-800/30 px-3 py-1">
              Next.js
            </Badge>
            <Badge className="bg-green-900/30 text-green-300 border-green-700 hover:bg-green-800/30 px-3 py-1">
              TypeScript
            </Badge>
            <Badge className="bg-green-900/30 text-green-300 border-green-700 hover:bg-green-800/30 px-3 py-1">
              Node.js
            </Badge>
            <Badge className="bg-green-900/30 text-green-300 border-green-700 hover:bg-green-800/30 px-3 py-1">
              Python
            </Badge>
            <Badge className="bg-green-900/30 text-green-300 border-green-700 hover:bg-green-800/30 px-3 py-1">
              Neural.Networks
            </Badge>
          </div>

          <div className="space-y-4">
            <Button className="bg-green-900/50 hover:bg-green-800/50 text-green-300 border border-green-700 mr-4 font-mono">
              <Mail className="mr-2 h-4 w-4" />
              [ESTABLISH_CONNECTION]
            </Button>
            <Button
              variant="outline"
              className="border-green-700 text-green-400 hover:bg-green-900/30 font-mono bg-transparent"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              [DOWNLOAD_RESUME]
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-green-950/10 border-y border-green-900/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-300">&gt; ABOUT_ME.decrypt()</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-black/50 border border-green-900/50 p-4">
                <div className="text-green-300 text-sm mb-2">$ whoami</div>
                <p className="text-green-400 leading-relaxed">
                  I am a digital architect with 5+ years of experience in the Matrix of web development. I specialize in
                  transforming complex algorithms into elegant, user-friendly interfaces that bridge the gap between
                  human intuition and machine logic.
                </p>
              </div>

              <div className="bg-black/50 border border-green-900/50 p-4">
                <div className="text-green-300 text-sm mb-2">$ ls -la skills/</div>
                <p className="text-green-400 leading-relaxed">
                  When not jacked into the mainframe, I contribute to open-source repositories, mentor fellow code
                  warriors, and explore the boundaries of what's possible in our digital reality.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-green-700 text-green-400">
                  Problem.Solving
                </Badge>
                <Badge variant="outline" className="border-green-700 text-green-400">
                  Team.Leadership
                </Badge>
                <Badge variant="outline" className="border-green-700 text-green-400">
                  Agile.Protocol
                </Badge>
                <Badge variant="outline" className="border-green-700 text-green-400">
                  Code.Mentoring
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-black/50 border-green-900/50 text-green-400">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-green-300" />
                    <CardTitle className="text-lg text-green-300">[EXPERIENCE_LOG]</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-green-400">Runtime: 5+ years in full-stack development</p>
                  <p className="text-green-400">Processes managed: 3-8 developer nodes</p>
                  <p className="text-green-400">Status: Currently optimizing reality.exe</p>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-green-900/50 text-green-400">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-green-300" />
                    <CardTitle className="text-lg text-green-300">[EDUCATION_DATA]</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-green-400">Degree: B.S. Computer Science</p>
                  <p className="text-green-400">Institution: Stanford University</p>
                  <p className="text-green-400">Specialization: Digital Reality Architecture</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-300">&gt; WORK_HISTORY.log</h2>

          <div className="space-y-8">
            <Card className="bg-black/50 border-green-900/50 text-green-400">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-green-300">Senior Full Stack Developer</CardTitle>
                    <CardDescription className="text-base text-green-500">
                      TechCorp Inc. • 2022 - Present
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-900/50 text-green-300 border-green-700">ACTIVE</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-green-300 text-sm mb-2">$ cat job_description.txt</div>
                <p className="text-green-400 mb-4">
                  Lead architect for customer-facing applications serving 100K+ users. Designed scalable digital
                  ecosystems using React, Node.js, and AWS infrastructure. Successfully debugged reality.exe multiple
                  times.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-900/30 text-green-300 border-green-700">React</Badge>
                  <Badge className="bg-green-900/30 text-green-300 border-green-700">Node.js</Badge>
                  <Badge className="bg-green-900/30 text-green-300 border-green-700">AWS</Badge>
                  <Badge className="bg-green-900/30 text-green-300 border-green-700">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-900/50 text-green-400">
              <CardHeader>
                <CardTitle className="text-green-300">Full Stack Developer</CardTitle>
                <CardDescription className="text-base text-green-500">StartupXYZ • 2020 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-green-300 text-sm mb-2">$ cat previous_role.txt</div>
                <p className="text-green-400 mb-4">
                  Built and maintained multiple web applications from concept to deployment. Collaborated with design
                  and product teams to deliver user-centric solutions that enhanced the digital experience matrix.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-900/30 text-green-300 border-green-700">Vue.js</Badge>
                  <Badge className="bg-green-900/30 text-green-300 border-green-700">Python</Badge>
                  <Badge className="bg-green-900/30 text-green-300 border-green-700">Django</Badge>
                  <Badge className="bg-green-900/30 text-green-300 border-green-700">Docker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section id="profiles" className="py-20 px-4 bg-green-950/10 border-y border-green-900/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-300">&gt; NETWORK_CONNECTIONS.list</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-black/50 border-green-900/50 hover:border-green-400/50 transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <Github className="h-12 w-12 mx-auto mb-4 text-green-400 group-hover:text-green-300" />
                <CardTitle className="text-green-300">[GITHUB_NODE]</CardTitle>
                <CardDescription className="text-green-500">Repository access granted</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-green-700 text-green-400 hover:bg-green-900/30 font-mono"
                  asChild
                >
                  <Link href="https://github.com/johndoe" target="_blank">
                    <Code className="mr-2 h-4 w-4" />
                    [ACCESS_REPO]
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-900/50 hover:border-green-400/50 transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <Linkedin className="h-12 w-12 mx-auto mb-4 text-green-400 group-hover:text-green-300" />
                <CardTitle className="text-green-300">[LINKEDIN_MATRIX]</CardTitle>
                <CardDescription className="text-green-500">Professional network interface</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-green-700 text-green-400 hover:bg-green-900/30 font-mono"
                  asChild
                >
                  <Link href="https://linkedin.com/in/johndoe" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    [ESTABLISH_LINK]
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-900/50 hover:border-green-400/50 transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <Twitter className="h-12 w-12 mx-auto mb-4 text-green-400 group-hover:text-green-300" />
                <CardTitle className="text-green-300">[TWITTER_FEED]</CardTitle>
                <CardDescription className="text-green-500">Thought transmission protocol</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-green-700 text-green-400 hover:bg-green-900/30 font-mono"
                  asChild
                >
                  <Link href="https://twitter.com/johndoe" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    [SYNC_FEED]
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black border-t border-green-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-300">&gt; INITIATE_COLLABORATION.exe</h2>

          <div className="bg-black/50 border border-green-900/50 p-8 mb-8 max-w-2xl mx-auto">
            <div className="text-green-300 text-sm mb-4">$ echo "collaboration_request"</div>
            <p className="text-xl text-green-400 leading-relaxed">
              Ready to jack into new projects and exciting collaborations. Let's connect our neural networks and build
              something extraordinary in the digital realm.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-green-900/50 hover:bg-green-800/50 text-green-300 border border-green-700 font-mono"
              asChild
            >
              <Link href="mailto:john@example.com">
                <Mail className="mr-2 h-4 w-4" />
                [SEND_MESSAGE]
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-green-700 text-green-400 hover:bg-green-900/30 font-mono bg-transparent"
              asChild
            >
              <Link href="https://calendly.com/johndoe" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                [SCHEDULE_SYNC]
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-green-900/50">
        <div className="container mx-auto text-center">
          <p className="text-green-500 font-mono">
            &copy; 2024 JOHN_DOE.EXE • All rights reserved •
            <span className="text-green-400"> System Status: OPERATIONAL</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
