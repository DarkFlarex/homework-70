import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    selectFetchOneContactLoading,
    selectOneContact,
    selectUpdateContactLoading,
} from '../../store/contactsSlice';
import { ApiContact } from '../../types';
import { toast } from 'react-toastify';
import { fetchOneContact, updateContact } from '../../store/contactsThunks';
import ContactForm from "../../compontents/ContactForm/ContactForm";
import Spinner from "../../compontents/Spinner/Spinner";

const EditContact = () => {
    const navigate = useNavigate();
    const { id } = useParams() as { id: string };
    const dispatch = useAppDispatch();
    const isFetching = useAppSelector(selectFetchOneContactLoading);
    const isUpdating = useAppSelector(selectUpdateContactLoading);
    const contact = useAppSelector(selectOneContact);

    const onSubmit = async (apiContact: ApiContact) => {
        try {
            await dispatch(updateContact({ id, apiContact })).unwrap();
            navigate('/');
            toast.success('Contact updated!');
        } catch (e) {
            toast.error('Could not update contact!');
        }
    };

    useEffect(() => {
        dispatch(fetchOneContact(id));
    }, [dispatch, id]);

    return (
        <div className="row mt-2">
            <div className="col">
                {isFetching && <Spinner />}
                {contact && (
                    <ContactForm
                        onSubmit={onSubmit}
                        existingContact={contact}
                        isLoading={isUpdating}
                    />
                )}
            </div>
        </div>
    );
};

export default EditContact;
