import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function NoteList({ notes }) {
    const { locale } = React.useContext(LocaleContext);
    if (notes.length === 0) {
        return (
            <section className="notes-list-empty">
                <p className="notes-list__empty">{locale === 'id' ? 'Tidak ada catatan' : 'There is no note'}</p>
            </section>
        )
    } else {
        return (
            <section className="notes-list">
                {
                    notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            {...note} />
                    ))
                }
            </section>
        )
    }
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;