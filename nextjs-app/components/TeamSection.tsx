'use client';

import { useState, useMemo, useRef } from 'react';
import Image from 'next/image';
import contentData from '@/content/about/content.json';
import imagesData from '@/content/about/images.json';

interface TeamMember {
  name: string;
  image: string;
  title: string;
  advice: string;
  about: string;
  favorite: string;
}

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<string | null>('Kaitlin'); // Default to Kaitlin
  const profileRef = useRef<HTMLDivElement>(null);

  // Extract team member data from content
  const teamMembers = useMemo(() => {
    const members: TeamMember[] = [];
    const content = contentData.content;
    
    const memberNames = ['Annette', 'Kaitlin', 'Ashley', 'Cassidy', 'Tonya', 'Ericka', 'Kendra', 'Karina', 'Anna', 'Alex', 'Madeline', 'Tammy', 'Chloe', 'Dana'];
    
    memberNames.forEach(name => {
      const nameIndex = content.findIndex(c => c.type === 'heading' && c.level === 2 && c.text === name);
      if (nameIndex !== -1) {
        const member: TeamMember = {
          name,
          image: '',
          title: '',
          advice: '',
          about: '',
          favorite: ''
        };
        
        // Find image - handle name variations
        const nameVariations = [name, name === 'Ericka' ? 'Erika' : '', name === 'Ashley' ? 'Ashley' : ''].filter(Boolean);
        const imageData = imagesData.images.find(img => {
          const path = img.localPath.toLowerCase();
          return nameVariations.some(n => path.includes(n.toLowerCase()));
        });
        if (imageData) {
          member.image = `/about/${imageData.localPath.split('/').pop()}`;
        }
        
        // Extract title (h3 after "A little bit about your Bridal Stylist")
        const stylistIndex = content.findIndex((c, i) => 
          i > nameIndex && i < nameIndex + 10 && c.type === 'heading' && c.level === 2 && c.text === "A little bit about your Bridal Stylist"
        );
        if (stylistIndex !== -1) {
          const titleItem = content[stylistIndex + 1];
          if (titleItem && titleItem.type === 'heading' && titleItem.level === 3) {
            member.title = titleItem.text.replace(/<br>/g, ' ').replace(/<br \/>/g, ' ').trim();
          }
        }
        
        // Extract advice - limit search to next 20 items to avoid crossing into next member
        const adviceIndex = content.findIndex((c, i) => 
          i > nameIndex && i < nameIndex + 20 && c.type === 'heading' && c.level === 3 && c.text.includes('one piece of advice')
        );
        if (adviceIndex !== -1) {
          const adviceItem = content[adviceIndex + 1];
          if (adviceItem && adviceItem.type === 'paragraph') {
            member.advice = adviceItem.text;
          }
        }
        
        // Extract about - limit search to next 20 items
        const aboutIndex = content.findIndex((c, i) => 
          i > nameIndex && i < nameIndex + 20 && c.type === 'heading' && c.level === 3 && c.text === "Tell us a bit about yourself"
        );
        if (aboutIndex !== -1) {
          const aboutItem = content[aboutIndex + 1];
          if (aboutItem && aboutItem.type === 'paragraph') {
            member.about = aboutItem.text;
          }
        }
        
        // Extract favorite - limit search to next 20 items
        const favoriteIndex = content.findIndex((c, i) => 
          i > nameIndex && i < nameIndex + 20 && c.type === 'heading' && c.level === 3 && c.text === "FAVORITE PART ABOUT BEING A BRIDAL STYLIST"
        );
        if (favoriteIndex !== -1) {
          const favoriteItem = content[favoriteIndex + 1];
          if (favoriteItem && favoriteItem.type === 'paragraph') {
            member.favorite = favoriteItem.text;
          }
        }
        
        members.push(member);
      }
    });
    
    return members;
  }, []);

  const selectedMemberData = teamMembers.find(m => m.name === selectedMember);

  const handleMemberSelect = (name: string) => {
    setSelectedMember(name);
    // Scroll to profile after state update
    setTimeout(() => {
      profileRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section className="content-section centered team-section">
      <div className="team-container">
        <div className="team-nav">
          <h2 className="team-profile-title">A little bit about<br />your Bridal Stylist</h2>
          {teamMembers.map((member) => (
            <button
              key={member.name}
              className={`team-nav-button ${selectedMember === member.name ? 'active' : ''}`}
              onClick={() => handleMemberSelect(member.name)}
            >
              <span>{member.name.toUpperCase()}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </div>

        {selectedMemberData && (
          <div className="team-profile" ref={profileRef}>
            
            <div className="team-profile-header">
              <div className="team-profile-image">
                {selectedMemberData.image && (
                  <Image
                    src={selectedMemberData.image}
                    alt={selectedMemberData.name}
                    width={280}
                    height={350}
                    style={{ objectFit: 'contain', objectPosition: 'center top' }}
                  />
                )}
              </div>
              <div className="team-profile-name-title">
                <h3 className="team-member-name">
                  <span className="team-name-first-letter">
                    {selectedMemberData.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="team-name-rest">
                    {selectedMemberData.name.slice(1).toLowerCase()}
                  </span>
                </h3>
                {selectedMemberData.title && (
                  <h4 className="team-member-title">{selectedMemberData.title.toUpperCase()}</h4>
                )}
              </div>
            </div>

            <div className="team-profile-content">
              {selectedMemberData.about && (
                <div className="team-profile-section">
                  <h5>TELL US A BIT ABOUT YOURSELF</h5>
                  <p>{selectedMemberData.about}</p>
                </div>
              )}
              {selectedMemberData.favorite && (
                <div className="team-profile-section">
                  <h5>FAVORITE PART ABOUT BEING A BRIDAL STYLIST</h5>
                  <p>{selectedMemberData.favorite}</p>
                </div>
              )}
              {selectedMemberData.advice && (
                <div className="team-profile-section">
                  <h5>ONE PIECE OF ADVICE YOU WOULD LIKE TO PASS ON TO BRIDES BEFORE THEIR APPOINTMENT</h5>
                  <p>{selectedMemberData.advice}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

