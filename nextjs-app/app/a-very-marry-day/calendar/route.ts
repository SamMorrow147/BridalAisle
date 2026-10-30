const ICS = [
  'BEGIN:VCALENDAR',
  'VERSION:2.0',
  'PRODID:-//Bridal Aisle Boutique//A Very Marry Day//EN',
  'CALSCALE:GREGORIAN',
  'METHOD:PUBLISH',
  'BEGIN:VEVENT',
  'UID:a-very-marry-day-2026@bridalaislemn.com',
  'DTSTAMP:20261030T220000Z',
  'DTSTART:20261129T160000Z',
  'DTEND:20261129T210000Z',
  "SUMMARY:A Very 'Marry' Day at Bridal Aisle",
  'LOCATION:Bridal Aisle\\, 15825 95th Ave N\\, Maple Grove\\, MN 55369',
  "DESCRIPTION:Santa Claus\\, 10am–3pm. Our Community's beloved Santa from The Woods is returning with us this year along with his reindeer and Santa's elves\\, Sparkle & Sprinkle! Plus games for the kids (and kids at heart)\\, food trucks\\, tours of our store\\, and more! Facebook: https://www.facebook.com/events/1153334607157888 — Details: https://www.bridalaislemn.com/a-very-marry-day",
  'URL:https://www.bridalaislemn.com/a-very-marry-day',
  'END:VEVENT',
  'END:VCALENDAR',
  '',
].join('\r\n');

export function GET() {
  return new Response(ICS, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'inline; filename="a-very-marry-day.ics"',
    },
  });
}
