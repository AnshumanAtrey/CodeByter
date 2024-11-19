# Codebyter

Codebyter is a web extension that automatically fetches questions from a specified URL at a set time and sends them to the ChatGPT API for responses. The answers are displayed in the lower right corner of the screen for a brief period.

## Features

- Automatically activates at a specified time (e.g., 11:30 AM).
- Scans for specific questions on a webpage.
- Sends questions to the ChatGPT API and displays the responses.
- Responses are shown for 1 minute before disappearing.

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd codebyter
   ```

2. **Create a `.env` file**:
   In the root of the project directory, create a file named `.env` and add your API key:

   ```
   API_KEY=your_api_key_here
   ```

3. **Update the `content.js` file**:
   Make sure to replace `<YOUR_SPECIFIC_URL>` and `<YOUR_API_ENDPOINT>` in `content.js` with the actual URL you want to target and the API endpoint for ChatGPT.

4. **Load the extension in your browser**:

   - For Chrome:
     1. Open Chrome and go to `chrome://extensions/`.
     2. Enable "Developer mode" in the top right corner.
     3. Click on "Load unpacked" and select the directory where your extension is located.

5. **Set the target time**:
   The extension is set to run at 11:30 AM by default. You can change this in the `background.js` file if needed.

## Usage

Once the extension is loaded and the target time is reached, it will automatically scan the specified URL for questions. The questions will be sent to the ChatGPT API, and the responses will be displayed in the lower right corner of the screen.

## Important Notes

- Ensure that your API key is kept secret and not shared publicly.
- The `.env` file should not be pushed to version control. Make sure to add it to your `.gitignore` file.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
