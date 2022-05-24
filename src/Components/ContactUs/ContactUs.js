import React from 'react'
import { db } from '../../Firebase'
import { useState } from 'react'

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [loader, setLoader] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    console.log(db)

    db.collection('contacts')
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false)
        alert('Your message has been submitted👍')
      })
      .catch((error) => {
        alert(error.message)
        setLoader(false)
      })

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div>
      <div className="text-center font-semibold text-4xl my-8"> Contact us</div>
      <div class="w-full md:w-96 md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">
          <form onSubmit={handleSubmit}>
            <label class="block mb-6">
              <span class="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Ram"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Ram123@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you're thinking about..."
              ></textarea>
            </label>
            <div class="mb-6">
              <button
                style={{ background: '#000' }}
                type="Submit"
                class="
            h-10
            px-5
            text-white
            bg-black
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
                      "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
