import {
  ExecutionContext,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';

const ActiveUserId = createParamDecorator<never, ExecutionContext, string>(
  (_, context) => {
    const request = context.switchToHttp().getRequest();
    const userId = request.userId;

    if (!userId) throw new UnauthorizedException();

    return userId;
  },
);

export { ActiveUserId };
