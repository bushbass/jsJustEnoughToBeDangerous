import React from 'react';

export default function Contact() {
  return (
    <div>
      <main class="main-add">
        <h3>All about 'Creature Collector'</h3>
        <div id="main-questions">
          <p>
            Just a fun little app for me to practice my web development skills.
            This version is in React but it came from another version that I originally made with HTML, CSS, and vanilla JavaScript. There is no database. The React version just saves data to local state (which is why it reverts to a few default creatures if you reload) but the vanilla JS version saves to local storage.  That is what I'm working on adding to this version now.
          </p>
        </div>
      </main>
    </div>
  );
}
