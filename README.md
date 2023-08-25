# typing-pauses
Programming files for my master's thesis titled "Identifying User Characteristics via Typing Pauses"

Code intended to extract typing pauses features from log files created with the "IRecU" keylogger.

HOW TO USE:
1. Place the .txt log files from the keylogger inside the folder
2. Open the file path in a cmd terminal.
3. Run the command: node file.js LOGFILE_NAME.txt
4. Run the command: java –jar keystroke.jar
5. Copy the result and paste it in dataset.arff (new line for every log file we run)
6. Repeat steps 3-5 changing the name of the log file in step 3 every time	
