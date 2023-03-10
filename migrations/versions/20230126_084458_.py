"""empty message

Revision ID: 64eea3ac1189
Revises: cbe56a254f2d
Create Date: 2023-01-26 08:44:58.783025

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '64eea3ac1189'
down_revision = 'cbe56a254f2d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('projectId', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=1000), nullable=False),
    sa.ForeignKeyConstraint(['projectId'], ['projects.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    # ### end Alembic commands ###
