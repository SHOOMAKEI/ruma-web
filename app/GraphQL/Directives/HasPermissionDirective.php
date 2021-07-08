<?php

namespace App\GraphQL\Directives;

use App\Models\User;
use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Exceptions\AuthorizationException;
use Nuwave\Lighthouse\Schema\Directives\BaseDirective;
use Nuwave\Lighthouse\Schema\Values\FieldValue;
use Nuwave\Lighthouse\Support\Contracts\FieldMiddleware;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class HasPermissionDirective extends BaseDirective implements FieldMiddleware
{
    public function handleField(FieldValue $fieldValue, Closure $next)
    {
        $resolver = $fieldValue->getResolver();


        return $next(
            $fieldValue->setResolver(
                function ($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo) use ($resolver) {
                    $user = User::find($context->user()->id);
                    $permission = $this->directiveArgValue('permission');


                    $this->authorize($user, $permission);


                    return $resolver($root, $args, $context, $resolveInfo);
                }
            )
        );
    }

    protected function authorize(User $user, $permission): void
    {
        if (! $user->hasPermissionTo($permission)) {
            throw new AuthorizationException(
                "You are not authorized to perform this action {$this->nodeName()}"
            );
        }
    }

    public static function definition(): string
    {
        return /** @lang GraphQL */ <<<'GRAPHQL'
        """
        Check if user has permission to access the field.
        """
        directive @hasPermission(
            """
            user permission
            """
            permission: String
        ) on ARGUMENT_DEFINITION | INPUT_FIELD_DEFINITION | FIELD_DEFINITION
        GRAPHQL;
    }
}
