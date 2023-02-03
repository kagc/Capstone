from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

def is_image(form, field):
    url = field.data.lower()
    
    if not url.startswith('https://') and not url.startswith('http://'):
        raise ValidationError('Invalid image url. Must begin with "http://" or "https://"')
    
    if '.jpg' not in url and '.jpeg' not in url and '.png' not in url and '.gif' not in url:
        raise ValidationError('Invalid image url. Valid types include ".jpg", ".jpeg", ".png", ".gif", etc.')
    
class ProjectForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
    coverImageUrl = StringField('cover image', validators=[DataRequired(), is_image])
    intro = StringField('intro', validators=[DataRequired()])
    supplies = StringField('supplies', validators=[DataRequired()])
    