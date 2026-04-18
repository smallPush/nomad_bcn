import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const resourceId = '627b8401-7f3d-4002-96cf-db9f2a997717';
    const url = `https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=${resourceId}&limit=20`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.success) {
      return NextResponse.json({ success: false, error: 'Failed to fetch from Open Data BCN' }, { status: 500 });
    }

    const records = data.result.records;

    // Filter and format records
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const formattedEvents = records
      .map((record: any) => ({
        id: record._id,
        name: record.name,
        description: record.description,
        startDate: record.begin_date,
        endDate: record.end_date,
        address: record.addresses_road_name + (record.addresses_start_number ? `, ${record.addresses_start_number}` : ''),
        category: record.values_attribute_name,
        link: record.register_id ? `https://www.barcelona.cat/agenda/en/detall/${record.register_id}` : null,
      }))
      .filter((event: any) => {
        if (!event.startDate) return false;
        const eventDate = new Date(event.startDate);
        return eventDate >= today;
      })
      .sort((a: any, b: any) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
      .slice(0, 10);

    return NextResponse.json({ success: true, events: formattedEvents });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
