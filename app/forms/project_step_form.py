from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class StepForm(FlaskForm):
    stepNum = IntegerField("step number", validators=[DataRequired()])
    stepTitle = StringField("title", validators=[DataRequired()])
    stepDescription = StringField("description", validators=[DataRequired()])
    stepImageUrl = StringField("image url")