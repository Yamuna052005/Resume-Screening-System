from flask import Flask, render_template, request
from skill_matcher import preprocess, match_score
from resume_parser import extract_text

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    score = None

    if request.method == "POST":
        resume = request.files["resume"]
        jd = request.form["jd"]

        resume_text = extract_text(resume)
        resume_clean = preprocess(resume_text)
        jd_clean = preprocess(jd)

        score = match_score(resume_clean, jd_clean)

    return render_template("index.html", score=score)

if __name__ == "__main__":
    app.run(debug=True)
