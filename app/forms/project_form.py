from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

def is_image(form, field):
    url = field.data
    
    if not url.startswith('https://') or '.' not in url:
        raise ValidationError('Image url not valid.')
    
class ProjectForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
    coverImageUrl = StringField('cover image', validators=[DataRequired(), is_image])
    intro = StringField('intro', validators=[DataRequired()])
    supplies = StringField('supplies', validators=[DataRequired()])
    