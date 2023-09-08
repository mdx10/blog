import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/ui/Page';

const ArticleEditPage = () => {
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
    return (
        <Page>
            <h1>
                {isEdit ? `Редактирование статьи ID ${id}` : 'Создание новой статьи'}
            </h1>
        </Page>
    );
};

export default ArticleEditPage;
