"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  description: string;
  type: "upcoming" | "past";
  image?: string;
  photos?: string[]; // Added photos array for gallery
}

const events: Event[] = [
  {
    id: 1,
    title: "Encrypta 2.0",
    date: "XX/XX/2025",
    venue: "Will be notified soon",
    description:
      "Join us for Encrypta 2.0, a thrilling cyber security event hosted by the Cyber Security Club. Test your skills and compete with the best!",
    type: "upcoming",
  },
  {
    id: 2,
    title: "Encrypta",
    date: "03rd October 2023",
    venue: "Albert Einstein Hall, 3rd Floor",
    description:
      "Join us for Encrypta, a thrilling cyber security event hosted by the Cyber Security Club. Test your skills and compete with the best!",
    type: "past",
    photos: [
      "/images/Encrypta/encrypta (1).JPG",
      "/images/Encrypta/encrypta (2).jpg",
      "/images/Encrypta/encrypta (3).JPG",
      "/images/Encrypta/encrypta (4).JPG",
      "/images/Encrypta/encrypta (5).JPG",
      "/images/Encrypta/encrypta (6).JPG",
      "/images/Encrypta/encrypta (7).JPG",
      "/images/Encrypta/encrypta (8).JPG",
      "/images/Encrypta/encrypta (9).JPG",
      "/images/Encrypta/encrypta (10).JPG",
      "/images/Encrypta/encrypta (11).JPG",
      "/images/Encrypta/encrypta (12).JPG",
      "/images/Encrypta/encrypta (13).JPG",
      "/images/Encrypta/encrypta (14).JPG",
      "/images/Encrypta/encrypta winner 1.JPG",
      "/images/Encrypta/encrypta winner 2.JPG",
      "/images/Encrypta/encrypta winner 3.JPG",
      "/images/Encrypta/encrypta (15).JPG",
      "/images/Encrypta/encrypta (16).JPG",
      "/images/Encrypta/encrypta (17).JPG",
      "/images/Encrypta/encrypta (18).JPG",
      "/images/Encrypta/encrypta (19).JPG",
      "/images/Encrypta/encrypta (20).JPG",
      "/images/Encrypta/encrypta (21).JPG",
      "/images/Encrypta/encrypta (22).JPG",
      "/images/Encrypta/encrypta (23).JPG",
      "/images/Encrypta/encrypta (24).JPG",
      "/images/Encrypta/encrypta (25).JPG",
      "/images/Encrypta/encrypta (26).JPG",
      "/images/Encrypta/encrypta (27).JPG",
      "/images/Encrypta/encrypta (28).JPG",
      "/images/Encrypta/encrypta (29).JPG",
      "/images/Encrypta/encrypta (30).JPG",
      "/images/Encrypta/encrypta (31).JPG",
      "/images/Encrypta/encrypta (32).JPG",
      "/images/Encrypta/encrypta (33).JPG",
      "/images/Encrypta/encrypta (34).JPG",
      "/images/Encrypta/encrypta (35).JPG",
      "/images/Encrypta/encrypta (36).JPG",
      "/images/Encrypta/encrypta (37).JPG",
      "/images/Encrypta/encrypta (38).JPG",
      "/images/Encrypta/encrypta (39).JPG",
      "/images/Encrypta/encrypta (40).JPG",
      "/images/Encrypta/encrypta (41).JPG",
      "/images/Encrypta/encrypta (42).JPG",
      "/images/Encrypta/encrypta (43).JPG",
    ],
  },
  {
    id: 3,
    title: "ByteBounty",
    date: "22nd April 2024",
    venue: "CSE Seminar Hall, 3rd Floor",
    description:
      "ByteBounty competition focused on web security vulnerabilities and bug bounty hunting. Engage in practical challenges and win exciting prizes!",
    type: "past",
    photos: [
      "/images/ByteBounty/ByteBounty(1).JPG",
      "/images/ByteBounty/ByteBounty(2).JPG",
      "/images/ByteBounty/ByteBounty(3).JPG",
      "/images/ByteBounty/ByteBounty(4).JPG",
      "/images/ByteBounty/ByteBounty(5).JPG",
      "/images/ByteBounty/ByteBounty(6).JPG",
      "/images/ByteBounty/ByteBounty(7).JPG",
      "/images/ByteBounty/ByteBounty(8).JPG",
      "/images/ByteBounty/ByteBounty(9).JPG",
      "/images/ByteBounty/ByteBounty(10).JPG",
      "/images/ByteBounty/ByteBounty(11).JPG",
      "/images/ByteBounty/ByteBounty(12).JPG",
      "/images/ByteBounty/ByteBounty(13).JPG",
    ],
  },
  {
    id: 4,
    title: "Cygnal",
    date: "10th September 2024",
    venue: "CSE Seminar Hall, 3rd Floor",
    description:
      "Cygnal event showcasing the latest in cybersecurity innovations and trends. Network with industry professionals and enhance your technical skills.",
    type: "past",
    photos: [
      "/images/Encrypta/encrypta (25).JPG",
      "/images/Encrypta/encrypta (26).JPG",
      "/images/Encrypta/encrypta (27).JPG",
      "/images/Encrypta/encrypta (28).JPG",
      "/images/Encrypta/encrypta (29).JPG",
      "/images/Encrypta/encrypta (30).JPG",
      "/images/Encrypta/encrypta (31).JPG",
      "/images/Encrypta/encrypta (32).JPG",
      "/images/Encrypta/encrypta (33).JPG",
      "/images/Encrypta/encrypta (34).JPG",
      "/images/Encrypta/encrypta (35).JPG",
      "/images/Encrypta/encrypta (36).JPG",
      "/images/Encrypta/encrypta (37).JPG",
      "/images/Encrypta/encrypta (38).JPG",
    ],
  },
];

export default function Events() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const filteredEvents = events.filter(event => {
    if (filter === "all") return true;
    return event.type === filter;
  });

  const nextPhoto = () => {
    if (selectedEvent?.photos) {
      setCurrentPhotoIndex(prev => (prev + 1) % selectedEvent.photos!.length);
    }
  };

  const prevPhoto = () => {
    if (selectedEvent?.photos) {
      setCurrentPhotoIndex(
        prev =>
          (prev - 1 + selectedEvent.photos!.length) %
          selectedEvent.photos!.length
      );
    }
  };

  useEffect(() => {
    if (!selectedEvent?.photos) return;

    const interval = setInterval(() => {
      setCurrentPhotoIndex(prev => (prev + 1) % selectedEvent.photos!.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [selectedEvent]);

  const getAllGalleryPhotos = () => {
    const galleryPhotos: Array<{
      photo: string;
      eventTitle: string;
      eventId: number;
    }> = [];
    events
      .filter(event => event.type === "past" && event.photos)
      .forEach(event => {
        event.photos?.forEach(photo => {
          galleryPhotos.push({
            photo,
            eventTitle: event.title,
            eventId: event.id,
          });
        });
      });
    return galleryPhotos;
  };

  const galleryPhotos = getAllGalleryPhotos();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 neon-text">
            Events & Competitions
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Explore our exciting events, workshops, and competitions designed to
            enhance your cybersecurity skills.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-blue-500/20">
        <div className="container">
          <div className="flex gap-4">
            {["all", "upcoming", "past"].map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab as "all" | "upcoming" | "past")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 capitalize ${
                  filter === tab
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                    : "border border-blue-500/30 text-foreground/70 hover:border-purple-500/50 hover:text-blue-300"
                }`}
              >
                {tab === "all"
                  ? "All Events"
                  : tab === "upcoming"
                    ? "Upcoming"
                    : "Past"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <div
                key={event.id}
                className="cyber-card group flex flex-col h-full"
              >
                {/* Event Type Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      event.type === "upcoming"
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-purple-500/20 text-purple-300"
                    }`}
                  >
                    {event.type === "upcoming" ? "Upcoming" : "Past"}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-2 mb-4 text-sm text-foreground/70 flex-1">
                  <div className="flex items-start gap-2">
                    <Calendar
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-blue-400"
                    />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-purple-400"
                    />
                    <span>{event.venue}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-6">
                  {event.description}
                </p>

                {/* CTA */}
                <div className="flex gap-3 pt-4 border-t border-blue-500/10">
                  {event.type === "upcoming" ? (
                    <>
                      <a
                        href="https://forms.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors text-sm font-semibold text-center"
                      >
                        Register
                      </a>
                      <a
                        href="#"
                        className="flex-1 px-4 py-2 rounded-lg border border-blue-500/30 text-foreground/70 hover:border-purple-500/50 hover:text-blue-300 transition-colors text-sm font-semibold text-center"
                      >
                        Details
                      </a>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedEvent(event);
                        setCurrentPhotoIndex(0);
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-blue-500/30 text-foreground/70 hover:border-purple-500/50 hover:text-blue-300 transition-colors text-sm font-semibold text-center"
                    >
                      View Photos
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Event Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryPhotos.slice(0, 8).map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  const event = events.find(e => e.id === item.eventId);
                  if (event) {
                    setSelectedEvent(event);
                    setCurrentPhotoIndex(
                      event.photos?.indexOf(item.photo) || 0
                    );
                  }
                }}
                className="aspect-square rounded-lg border border-blue-500/20 hover:border-purple-500/50 transition-all cursor-pointer group overflow-hidden"
              >
                <img
                  src={item.photo || "/placeholder.svg"}
                  alt={`${item.eventTitle} - Gallery Photo`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-blue-500/20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Subscribe to our newsletter to get updates about upcoming events and
            competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 focus:border-blue-500/70 outline-none transition-colors text-foreground placeholder-foreground/50"
            />
            <button className="cyber-button whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {selectedEvent && selectedEvent.photos && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full pt-12">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-60 bg-red-500/80 hover:bg-red-600 text-white rounded-lg p-2 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>

            {/* Main Image */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden border border-blue-500/30 mb-4">
              <img
                src={
                  selectedEvent.photos[currentPhotoIndex] || "/placeholder.svg"
                }
                alt={`${selectedEvent.title} - Photo ${currentPhotoIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Title and Counter */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-blue-300">
                {selectedEvent.title}
              </h3>
              <span className="text-foreground/70 text-sm">
                {currentPhotoIndex + 1} / {selectedEvent.photos.length}
              </span>
            </div>

            <div className="flex items-center justify-center gap-8">
              <button
                onClick={prevPhoto}
                className="p-2 rounded-lg border border-blue-500/30 text-foreground/70 hover:border-purple-500/50 hover:text-blue-300 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextPhoto}
                className="p-2 rounded-lg border border-blue-500/30 text-foreground/70 hover:border-purple-500/50 hover:text-blue-300 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
