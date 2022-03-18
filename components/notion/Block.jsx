import Text from './Text';
import Callout from './Callout';

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'heading_1':
      return (
        <h1 className="text-2xl mb-2 mt-4">
          <Text id={id} text={value.rich_text} />
        </h1>
      );

    case 'heading_2':
      return (
        <h2 className="text-xl mb-2 mt-4">
          <Text id={id} text={value.rich_text} />
        </h2>
      );

    case 'heading_3':
      return (
        <h3 className="text-lg mb-2  mt-4">
          <Text id={id} text={value.rich_text} />
        </h3>
      );

    case 'paragraph':
      if (!value.rich_text.length) {
        return <div className="h-5" />;
      }

      return (
        <p className="text-md">
          <Text id={id} text={value.rich_text} />
        </p>
      );

    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className="mb-2 list-inside">
          <Text id={id} text={value.rich_text} />
        </li>
      );

    case 'callout':
      return (
        <div className="mt-4 mb-4">
          <Callout
            id={id}
            color={value.color}
            icon={value.icon.emoji}
            text={value.rich_text}
          />
        </div>
      );

    default:
      return;
  }
};

export default renderBlock;
