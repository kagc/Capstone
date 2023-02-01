from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class QuestionForm(FlaskForm):
    question = StringField('comment', validators=[DataRequired()])