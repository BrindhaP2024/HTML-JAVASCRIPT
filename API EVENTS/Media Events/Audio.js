document.addEventListener('DOMContentLoaded', () => {
    // Select the audio element
    const audioElement = document.querySelector('audio');
    const consoleOutput = document.getElementById('consoleOutput');
    let mediaRecorder;
    let recordedChunks = [];

    // Add event listeners for the addtrack, change, and removetrack events
    audioElement.addEventListener('addtrack', (event) => {
        console.log('A new audio track has been added:', event.track);
        displayMessage(`A new audio track has been added: ${event.track.kind}`);
    });

    audioElement.addEventListener('change', (event) => {
        console.log('An audio track has been enabled or disabled:', event);
        displayMessage('An audio track has been enabled or disabled');
    });

    audioElement.addEventListener('removetrack', (event) => {
        console.log('An audio track has been removed:', event.track);
        displayMessage(`An audio track has been removed: ${event.track.kind}`);
    });

    // Example function to add a new audio track
    document.getElementById('addTrackButton').addEventListener('click', () => {
        const newTrack = audioElement.addTextTrack('subtitles', 'English', 'en');
        newTrack.mode = 'showing';
        console.log('Added new audio track: Subtitles');
        displayMessage('Added new audio track: Subtitles');
    });

    // Example function to remove an audio track
    document.getElementById('removeTrackButton').addEventListener('click', () => {
        if (audioElement.textTracks.length > 0) {
            const trackToRemove = audioElement.textTracks[0];
            trackToRemove.mode = 'disabled'; // Disable the track before removing
            audioElement.removeChild(trackToRemove);
            console.log('Removed an audio track');
            displayMessage('Removed an audio track');
        } else {
            displayMessage('No audio tracks to remove.');
        }
    });

    // Example function to toggle the enabled state of an audio track
    document.getElementById('toggleTrackButton').addEventListener('click', () => {
        if (audioElement.textTracks.length > 0) {
            const track = audioElement.textTracks[0]; // Get the first track
            track.mode = (track.mode === 'showing') ? 'hidden' : 'showing'; // Toggle visibility
            console.log(`Toggled track visibility: ${track.mode}`);
            displayMessage(`Toggled track visibility: ${track.mode}`);
        } else {
            displayMessage('No audio tracks to toggle.');
        }
    });

    // Get access to the user's media
    const constraints = { audio: true };
    let mediaStream;

    // Start recording
    document.getElementById('startRecordingButton').addEventListener('click', () => {
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                mediaStream = stream;
                mediaRecorder = new MediaRecorder(stream);

                mediaRecorder.addEventListener('dataavailable', (event) => {
                    recordedChunks.push(event.data);
                    console.log('Recording data available:', event.data);
                    displayMessage('Recording data available.');
                });

                mediaRecorder.addEventListener('error', (event) => {
                    console.error('Recording error:', event.error);
                    displayMessage(`Recording error: ${event.error}`);
                });

                mediaRecorder.addEventListener('pause', () => {
                    console.log('Recording paused.');
                    displayMessage('Recording paused.');
                });

                mediaRecorder.addEventListener('resume', () => {
                    console.log('Recording resumed.');
                    displayMessage('Recording resumed.');
                });

                mediaRecorder.addEventListener('start', () => {
                    console.log('Recording started.');
                    displayMessage('Recording started.');
                });

                mediaRecorder.addEventListener('stop', () => {
                    const blob = new Blob(recordedChunks, { type: 'audio/wav' });
                    const audioURL = URL.createObjectURL(blob);
                    const audioLink = document.createElement('a');
                    audioLink.href = audioURL;
                    audioLink.download = 'recording.wav';
                    audioLink.textContent = 'Download Recorded Audio';
                    document.body.appendChild(audioLink);
                    console.log('Recording stopped.');
                    displayMessage('Recording stopped.');
                });

                mediaRecorder.start();

                // Enable control buttons
                document.getElementById('pauseRecordingButton').disabled = false;
                document.getElementById('stopRecordingButton').disabled = false;
                document.getElementById('startRecordingButton').disabled = true;
            })
            .catch((err) => {
                console.error('Error getting user media:', err);
                displayMessage(`Error getting user media: ${err}`);
            });
    });

    // Pause recording
    document.getElementById('pauseRecordingButton').addEventListener('click', () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.pause();
        }
    });

    // Resume recording
    document.getElementById('resumeRecordingButton').addEventListener('click', () => {
        if (mediaRecorder && mediaRecorder.state === 'paused') {
            mediaRecorder.resume();
        }
    });

    // Stop recording
    document.getElementById('stopRecordingButton').addEventListener('click', () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            mediaStream.getTracks().forEach(track => track.stop()); // Stop the media tracks
        }
    });

    // Function to display messages in the console output area
    function displayMessage(message) {
        consoleOutput.innerHTML += `<p>${message}</p>`;
    }
});
