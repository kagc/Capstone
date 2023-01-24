from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class ProjectForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
    coverImageUrl = StringField('cover image', validators=[DataRequired()])
    intro = StringField('introction', validators=[DataRequired()])
    supplies = StringField('supplies', validators=[DataRequired()])
    