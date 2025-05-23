INSERT INTO circuses (
    name, description, location, size, website, image_url,
    tech_stack, positions, founded, is_touring
) VALUES
    (
        'Cirque du Silicon',
        'Where code meets circus arts. Our innovative performances blend traditional circus with cutting-edge technology.',
        'San Francisco, CA',
        'large',
        'https://cirquedusilicon.example.com',
        'https://images.unsplash.com/photo-1435034568314-8303dbda4b8c',
        ARRAY['React', 'Three.js', 'WebGL', 'Python'],
        ARRAY['Aerialist', 'Acrobat', 'Juggler'],
        2018,
        true
    ),
    (
        'Binary Circus',
        'A boutique circus company specializing in LED-enhanced performances and interactive shows.',
        'Austin, TX',
        'medium',
        'https://binarycircus.example.com',
        'https://images.unsplash.com/photo-1576544403918-c47d52572a9a',
        ARRAY['React Native', 'Node.js', 'WebSocket', 'Arduino'],
        ARRAY['Tightrope Walker', 'Fire Performer'],
        2020,
        false
    ),
    (
        'Recursive Circus Arts',
        'A contemporary circus that loops through traditional acts with a mathematical twist.',
        'Seattle, WA',
        'medium',
        'https://recurcus.example.com',
        'https://images.unsplash.com/photo-1464122632645-bf5f12bbe202',
        ARRAY['Python', 'TensorFlow', 'Processing', 'Max/MSP'],
        ARRAY['Contortionist', 'Trapeze Artist'],
        2019,
        true
    ),
    (
        'Cloud Trapeze Collective',
        'A distributed circus company that performs both in physical spaces and in VR.',
        'Portland, OR',
        'small',
        'https://cloudtrapeze.example.com',
        'https://images.unsplash.com/photo-1542732935-0750da3c04b5',
        ARRAY['Unity', 'WebXR', 'AWS', 'Go'],
        ARRAY['Aerialist', 'Strongman'],
        2021,
        true
    ),
    (
        'Git Circus',
        'Masters of version-controlled performances where traditional circus arts meet modern technology.',
        'Boston, MA',
        'large',
        'https://gitcircus.example.com',
        'https://images.unsplash.com/photo-1647141661087-7a7b8d5b4021',
        ARRAY['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
        ARRAY['Ring Master', 'Acrobat'],
        2017,
        false
    ); 