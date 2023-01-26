"""users, projects, project steps, comments

Revision ID: cbe56a254f2d
Revises: 
Create Date: 2023-01-25 09:24:41.604480

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = 'cbe56a254f2d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
        
    op.create_table('projects',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('creatorId', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=40), nullable=False),
    sa.Column('category', sa.String(length=255), nullable=False),
    sa.Column('coverImageUrl', sa.String(length=1000), nullable=False),
    sa.Column('intro', sa.String(length=1000), nullable=False),
    sa.Column('supplies', sa.String(length=1000), nullable=False),
    sa.ForeignKeyConstraint(['creatorId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    
    if environment == "production":
        op.execute(f"ALTER TABLE projects SET SCHEMA {SCHEMA};")
        
    op.create_table('project_steps',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('projectId', sa.Integer(), nullable=False),
    sa.Column('stepNum', sa.Integer(), nullable=False),
    sa.Column('stepTitle', sa.String(length=40), nullable=False),
    sa.Column('stepDescription', sa.String(length=1000), nullable=False),
    sa.Column('stepImageUrl', sa.String(length=1000), nullable=True),
    sa.ForeignKeyConstraint(['projectId'], ['projects.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    
    if environment == "production":
        op.execute(f"ALTER TABLE project_steps SET SCHEMA {SCHEMA};")
        
    # op.create_table('comments',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('projectId', sa.Integer(), nullable=False),
    # sa.Column('userId', sa.Integer(), nullable=False),
    # sa.Column('comment', sa.String(), nullable=False),
    # sa.ForeignKeyConstraint(['projectId'], ['projects.id'], ),
    # sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    # sa.PrimaryKeyConstraint('id')
    # )
    
    # if environment == "production":
    #     op.execute(f"ALTER TABLE comments SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.drop_table('comments')
    op.drop_table('project_steps')
    op.drop_table('projects')
    op.drop_table('users')
    # ### end Alembic commands ###
