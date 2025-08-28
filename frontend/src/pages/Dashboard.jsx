import { useState } from 'react'

export default function Dashboard() {
  const [notes, setNotes] = useState([])
  const [text, setText] = useState('')
  const [audioFile, setAudioFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const addNote = () => {
    if (!text.trim()) return
    setNotes([...notes, { id: Date.now(), text }])
    setText('')
  }

  const deleteNote = (id) => setNotes(notes.filter(n => n.id !== id))

  const handleAudioUpload = async () => {
    if (!audioFile) return
    setLoading(true)

    const formData = new FormData()
    formData.append('file', audioFile)

    try {
      // Call backend API (Node/Express or Python)
      const res = await fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      if (data.text) {
        setNotes([...notes, { id: Date.now(), text: data.text }])
      }
    } catch (err) {
      console.error(err)
      alert('Error transcribing audio')
    } finally {
      setLoading(false)
      setAudioFile(null)
    }
  }

  return (
    <div>
      <h2 className="mb-3">My Notes</h2>

      {/* Manual Add Note */}
      <div className="input-group mb-3">
        <input
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a note..."
        />
        <button className="btn btn-success" onClick={addNote}>Add</button>
      </div>

      {/* Audio Upload */}
      <div className="mb-3">
        <input
          type="file"
          accept="audio/*"
          className="form-control mb-2"
          onChange={(e) => setAudioFile(e.target.files[0])}
        />
        <button
          className="btn btn-primary"
          onClick={handleAudioUpload}
          disabled={loading}
        >
          {loading ? 'Transcribing...' : 'Upload & Transcribe'}
        </button>
      </div>

      {/* Notes List */}
      <ul className="list-group">
        {notes.map(note => (
          <li key={note.id} className="list-group-item d-flex justify-content-between align-items-center">
            {note.text}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
