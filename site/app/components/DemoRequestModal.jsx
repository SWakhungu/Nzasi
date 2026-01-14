"use client";

export default function DemoRequestModal({ onClose, onSubmitted }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const body = Array.from(formData.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    window.location.href = `mailto:info@nzasi.com?subject=AfyaNumeriq Demo Request&body=${encodeURIComponent(
      body
    )}`;

    if (onSubmitted) onSubmitted();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#1f3a60] p-5 text-white text-center">
          <h2 className="text-xl font-bold">AfyaNumeriq GRC Demo Request</h2>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6 max-h-[80vh] overflow-y-auto text-black text-base"
        >
          {/* Name and Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                First Name *
              </label>
              <input
                required
                name="First Name"
                placeholder="First Name"
                className="w-full border rounded-md p-2 text-black placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name *
              </label>
              <input
                required
                name="Last Name"
                placeholder="Last Name"
                className="w-full border rounded-md p-2 text-black placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Company / Organization *
              </label>
              <input
                required
                name="Company / Organization"
                placeholder="Company / Organization"
                className="w-full border rounded-md p-2 text-black placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Country *
              </label>
              <select
                required
                name="Country"
                className="w-full border rounded-md p-2 bg-white text-black"
              >
                <option value="">Select Country</option>
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Argentina</option>
                <option>Armenia</option>
                <option>Australia</option>
                <option>Austria</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Belize</option>
                <option>Benin</option>
                <option>Bhutan</option>
                <option>Bolivia</option>
                <option>Bosnia and Herzegovina</option>
                <option>Botswana</option>
                <option>Brazil</option>
                <option>Brunei</option>
                <option>Bulgaria</option>
                <option>Burkina Faso</option>
                <option>Burundi</option>
                <option>Cambodia</option>
                <option>Cameroon</option>
                <option>Canada</option>
                <option>Cape Verde</option>
                <option>Central African Republic</option>
                <option>Chad</option>
                <option>Chile</option>
                <option>China</option>
                <option>Colombia</option>
                <option>Comoros</option>
                <option>Congo</option>
                <option>Costa Rica</option>
                <option>Croatia</option>
                <option>Cuba</option>
                <option>Cyprus</option>
                <option>Czech Republic</option>
                <option>Denmark</option>
                <option>Djibouti</option>
                <option>Dominica</option>
                <option>Dominican Republic</option>
                <option>Ecuador</option>
                <option>Egypt</option>
                <option>El Salvador</option>
                <option>Equatorial Guinea</option>
                <option>Eritrea</option>
                <option>Estonia</option>
                <option>Eswatini</option>
                <option>Ethiopia</option>
                <option>Fiji</option>
                <option>Finland</option>
                <option>France</option>
                <option>Gabon</option>
                <option>Gambia</option>
                <option>Georgia</option>
                <option>Germany</option>
                <option>Ghana</option>
                <option>Greece</option>
                <option>Grenada</option>
                <option>Guatemala</option>
                <option>Guinea</option>
                <option>Guinea-Bissau</option>
                <option>Guyana</option>
                <option>Haiti</option>
                <option>Honduras</option>
                <option>Hungary</option>
                <option>Iceland</option>
                <option>India</option>
                <option>Indonesia</option>
                <option>Iran</option>
                <option>Iraq</option>
                <option>Ireland</option>
                <option>Israel</option>
                <option>Italy</option>
                <option>Jamaica</option>
                <option>Japan</option>
                <option>Jordan</option>
                <option>Kazakhstan</option>
                <option>Kenya</option>
                <option>Kiribati</option>
                <option>Korea, North</option>
                <option>Korea, South</option>
                <option>Kosovo</option>
                <option>Kuwait</option>
                <option>Kyrgyzstan</option>
                <option>Laos</option>
                <option>Latvia</option>
                <option>Lebanon</option>
                <option>Lesotho</option>
                <option>Liberia</option>
                <option>Libya</option>
                <option>Liechtenstein</option>
                <option>Lithuania</option>
                <option>Luxembourg</option>
                <option>Madagascar</option>
                <option>Malawi</option>
                <option>Malaysia</option>
                <option>Maldives</option>
                <option>Mali</option>
                <option>Malta</option>
                <option>Marshall Islands</option>
                <option>Mauritania</option>
                <option>Mauritius</option>
                <option>Mexico</option>
                <option>Micronesia</option>
                <option>Moldova</option>
                <option>Monaco</option>
                <option>Mongolia</option>
                <option>Montenegro</option>
                <option>Morocco</option>
                <option>Mozambique</option>
                <option>Myanmar</option>
                <option>Namibia</option>
                <option>Nauru</option>
                <option>Nepal</option>
                <option>Netherlands</option>
                <option>New Zealand</option>
                <option>Nicaragua</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>North Macedonia</option>
                <option>Norway</option>
                <option>Oman</option>
                <option>Pakistan</option>
                <option>Palau</option>
                <option>Palestine</option>
                <option>Panama</option>
                <option>Papua New Guinea</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Philippines</option>
                <option>Poland</option>
                <option>Portugal</option>
                <option>Qatar</option>
                <option>Romania</option>
                <option>Russia</option>
                <option>Rwanda</option>
                <option>Saint Kitts and Nevis</option>
                <option>Saint Lucia</option>
                <option>Saint Vincent and the Grenadines</option>
                <option>Samoa</option>
                <option>San Marino</option>
                <option>Sao Tome and Principe</option>
                <option>Saudi Arabia</option>
                <option>Senegal</option>
                <option>Serbia</option>
                <option>Seychelles</option>
                <option>Sierra Leone</option>
                <option>Singapore</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Solomon Islands</option>
                <option>Somalia</option>
                <option>South Africa</option>
                <option>South Sudan</option>
                <option>Spain</option>
                <option>Sri Lanka</option>
                <option>Sudan</option>
                <option>Suriname</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>Syria</option>
                <option>Taiwan</option>
                <option>Tajikistan</option>
                <option>Tanzania</option>
                <option>Thailand</option>
                <option>Timor-Leste</option>
                <option>Togo</option>
                <option>Tonga</option>
                <option>Trinidad and Tobago</option>
                <option>Tunisia</option>
                <option>Turkey</option>
                <option>Turkmenistan</option>
                <option>Tuvalu</option>
                <option>Uganda</option>
                <option>Ukraine</option>
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Uruguay</option>
                <option>Uzbekistan</option>
                <option>Vanuatu</option>
                <option>Vatican City</option>
                <option>Venezuela</option>
                <option>Vietnam</option>
                <option>Yemen</option>
                <option>Zambia</option>
                <option>Zimbabwe</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Work Email *
              </label>
              <input
                required
                type="email"
                name="Work Email"
                placeholder="Work Email"
                className="w-full border rounded-md p-2 text-black placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Company Size *
              </label>
              <select
                required
                name="Company Size"
                className="w-full border rounded-md p-2 bg-white text-black"
              >
                <option value="">Select Company Size</option>
                <option>1–10</option>
                <option>11–50</option>
                <option>51–200</option>
                <option>201+</option>
              </select>
            </div>
          </div>

          {/* ISO Standards Checkboxes */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              What are you interested in speaking about during the demo?
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center">
                <input type="checkbox" name="ISO 7101" className="mr-2" />
                ISO 7101
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="ISO 15189" className="mr-2" />
                ISO 15189
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="ISO 27001" className="mr-2" />
                ISO 27001
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="ISO 17025" className="mr-2" />
                ISO 17025
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="ISO 42001" className="mr-2" />
                ISO 42001
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="Other" className="mr-2" />
                Other
              </label>
            </div>
          </div>

          {/* Additional Comments */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Additional Comments
            </label>
            <textarea
              name="Additional Comments"
              placeholder="Additional comments (optional)"
              className="w-full border rounded-md p-2 h-24 text-black placeholder-gray-400"
            />
          </div>

          {/* Date and Time Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Date #1 Option
              </label>
              <input
                type="date"
                name="Date #1 Option"
                className="w-full border rounded-md p-2 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Date #1 Time Block
              </label>
              <input
                type="time"
                name="Date #1 Time Block"
                className="w-full border rounded-md p-2 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Date #2 Option
              </label>
              <input
                type="date"
                name="Date #2 Option"
                className="w-full border rounded-md p-2 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Date #2 Time Block
              </label>
              <input
                type="time"
                name="Date #2 Time Block"
                className="w-full border rounded-md p-2 text-black"
              />
            </div>
          </div>

          <p className="text-xs text-black text-center">
            Your data will be processed in accordance with our{" "}
            <a href="/privacy-policy" className="underline text-[#1f3a60]">
              privacy policy
            </a>
            .
          </p>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#1f3a60] text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
