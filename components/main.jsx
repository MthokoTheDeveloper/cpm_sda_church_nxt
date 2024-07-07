
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export function main() {
  return (
    (<div className="flex min-h-screen w-full">
      <div className="flex-1">
        <header className="sticky top-0 z-10 bg-background">
          <nav className="container flex items-center justify-between py-4 mx-auto">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <ChurchIcon className="h-6 w-6" />
              <span className="text-lg font-bold">Cowdray Park Main SDA</span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Ministries
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Events
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Contact
              </Link>
            </div>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </nav>
        </header>
        <main>
          <section className="w-full">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 md:py-16">
              <div className="space-y-4 order-2 lg:order-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Welcome to Cowdray Park Main SDA
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Join us for worship, fellowship, and spiritual growth.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Join Us
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-1">
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="600"
                  alt="Church"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover" />
              </div>
            </div>
          </section>
          <section className="w-full bg-muted py-8 md:py-16">
            <div className="container">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <Link
                      href="#"
                      className="block p-4 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}>
                      <div className="flex items-center gap-4">
                        <CalendarIcon className="h-8 w-8" />
                        <div>
                          <h3 className="text-lg font-medium">Upcoming Events</h3>
                          <p className="text-muted-foreground">Check out our upcoming events</p>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <Link
                      href="#"
                      className="block p-4 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}>
                      <div className="flex items-center gap-4">
                        <UsersIcon className="h-8 w-8" />
                        <div>
                          <h3 className="text-lg font-medium">Join a Ministry</h3>
                          <p className="text-muted-foreground">Get involved in our ministries</p>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <Link
                      href="#"
                      className="block p-4 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}>
                      <div className="flex items-center gap-4">
                        <BookIcon className="h-8 w-8" />
                        <div>
                          <h3 className="text-lg font-medium">Sermons</h3>
                          <p className="text-muted-foreground">Listen to our latest sermons</p>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <Link
                      href="#"
                      className="block p-4 hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}>
                      <div className="flex items-center gap-4">
                        <PhoneIcon className="h-8 w-8" />
                        <div>
                          <h3 className="text-lg font-medium">Contact Us</h3>
                          <p className="text-muted-foreground">Get in touch with us</p>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>
        </main>
      </div>
      <div className="hidden lg:block lg:w-1/6 lg:bg-primary lg:ml-4" />
    </div>)
  );
}

function BookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function ChurchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 22V5l-6-3-6 3v17" />
      <path d="M12 7v5" />
      <path d="M10 9h4" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
