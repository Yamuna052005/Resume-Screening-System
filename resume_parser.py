import PyPDF2
def extract_text(file_storage): 
    text = ""
    reader = PyPDF2.PdfReader(file_storage)
    for page in reader.pages:
            text += page.extract_text() or ""
    return text.lower()
