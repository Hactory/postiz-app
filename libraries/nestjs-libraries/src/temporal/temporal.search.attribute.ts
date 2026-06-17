import {
  defineSearchAttributeKey,
  SearchAttributeType,
} from '@temporalio/common';

// Ember-Social: KEYWORD thay vì TEXT.
// Lý do: dev local dùng Temporal + Postgres visibility (không Elasticsearch — image ES 7.17
// crash JVM trên Apple Silicon). SQL visibility giới hạn tối đa 3 search attribute kiểu Text,
// trong khi Keyword có pool lớn hơn và đúng nghĩa cho ID (khớp chính xác). 2 field này chỉ
// được set/lọc dạng string ID nên Keyword tương đương về chức năng.
export const organizationId = defineSearchAttributeKey(
  'organizationId',
  SearchAttributeType.KEYWORD
);

export const postId = defineSearchAttributeKey(
  'postId',
  SearchAttributeType.KEYWORD
);
