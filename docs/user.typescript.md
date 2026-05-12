# `user` Submodule <a name="`user` Submodule" id="@cdktn/provider-databricks.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktn/provider-databricks.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user databricks_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.user.User.Initializer"></a>

```typescript
import { user } from '@cdktn/provider-databricks'

new user.User(scope: Construct, id: string, config: UserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.user.User.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.user.User.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.user.User.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.user.User.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.user.User.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.user.User.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.user.User.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetAclPrincipalId">resetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetAllowClusterCreate">resetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetAllowInstancePoolCreate">resetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetApi">resetApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetDatabricksSqlAccess">resetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetDisableAsUserDeletion">resetDisableAsUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetForceDeleteHomeDir">resetForceDeleteHomeDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetForceDeleteRepos">resetForceDeleteRepos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetHome">resetHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetRepos">resetRepos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetWorkspaceAccess">resetWorkspaceAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.resetWorkspaceConsume">resetWorkspaceConsume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.user.User.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.user.User.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.user.User.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.user.User.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.user.User.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.user.User.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.user.User.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.user.User.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.user.User.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.user.User.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.user.User.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.user.User.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.user.User.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.user.User.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.user.User.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.user.User.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.user.User.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.user.User.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.user.User.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.user.User.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.user.User.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.user.User.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.user.User.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.user.User.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.user.User.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.user.User.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.user.User.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.user.User.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.user.User.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.user.User.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.user.User.putProviderConfig"></a>

```typescript
public putProviderConfig(value: UserProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.user.User.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.user.UserProviderConfig">UserProviderConfig</a>

---

##### `resetAclPrincipalId` <a name="resetAclPrincipalId" id="@cdktn/provider-databricks.user.User.resetAclPrincipalId"></a>

```typescript
public resetAclPrincipalId(): void
```

##### `resetActive` <a name="resetActive" id="@cdktn/provider-databricks.user.User.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAllowClusterCreate` <a name="resetAllowClusterCreate" id="@cdktn/provider-databricks.user.User.resetAllowClusterCreate"></a>

```typescript
public resetAllowClusterCreate(): void
```

##### `resetAllowInstancePoolCreate` <a name="resetAllowInstancePoolCreate" id="@cdktn/provider-databricks.user.User.resetAllowInstancePoolCreate"></a>

```typescript
public resetAllowInstancePoolCreate(): void
```

##### `resetApi` <a name="resetApi" id="@cdktn/provider-databricks.user.User.resetApi"></a>

```typescript
public resetApi(): void
```

##### `resetDatabricksSqlAccess` <a name="resetDatabricksSqlAccess" id="@cdktn/provider-databricks.user.User.resetDatabricksSqlAccess"></a>

```typescript
public resetDatabricksSqlAccess(): void
```

##### `resetDisableAsUserDeletion` <a name="resetDisableAsUserDeletion" id="@cdktn/provider-databricks.user.User.resetDisableAsUserDeletion"></a>

```typescript
public resetDisableAsUserDeletion(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.user.User.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-databricks.user.User.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetForce` <a name="resetForce" id="@cdktn/provider-databricks.user.User.resetForce"></a>

```typescript
public resetForce(): void
```

##### `resetForceDeleteHomeDir` <a name="resetForceDeleteHomeDir" id="@cdktn/provider-databricks.user.User.resetForceDeleteHomeDir"></a>

```typescript
public resetForceDeleteHomeDir(): void
```

##### `resetForceDeleteRepos` <a name="resetForceDeleteRepos" id="@cdktn/provider-databricks.user.User.resetForceDeleteRepos"></a>

```typescript
public resetForceDeleteRepos(): void
```

##### `resetHome` <a name="resetHome" id="@cdktn/provider-databricks.user.User.resetHome"></a>

```typescript
public resetHome(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.user.User.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.user.User.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetRepos` <a name="resetRepos" id="@cdktn/provider-databricks.user.User.resetRepos"></a>

```typescript
public resetRepos(): void
```

##### `resetWorkspaceAccess` <a name="resetWorkspaceAccess" id="@cdktn/provider-databricks.user.User.resetWorkspaceAccess"></a>

```typescript
public resetWorkspaceAccess(): void
```

##### `resetWorkspaceConsume` <a name="resetWorkspaceConsume" id="@cdktn/provider-databricks.user.User.resetWorkspaceConsume"></a>

```typescript
public resetWorkspaceConsume(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a User resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.user.User.isConstruct"></a>

```typescript
import { user } from '@cdktn/provider-databricks'

user.User.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.user.User.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.user.User.isTerraformElement"></a>

```typescript
import { user } from '@cdktn/provider-databricks'

user.User.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.user.User.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.user.User.isTerraformResource"></a>

```typescript
import { user } from '@cdktn/provider-databricks'

user.User.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.user.User.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.user.User.generateConfigForImport"></a>

```typescript
import { user } from '@cdktn/provider-databricks'

user.User.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a User resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.user.User.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference">UserProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.aclPrincipalIdInput">aclPrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.allowClusterCreateInput">allowClusterCreateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.allowInstancePoolCreateInput">allowInstancePoolCreateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.apiInput">apiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.databricksSqlAccessInput">databricksSqlAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.disableAsUserDeletionInput">disableAsUserDeletionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.forceDeleteHomeDirInput">forceDeleteHomeDirInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.forceDeleteReposInput">forceDeleteReposInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.forceInput">forceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.homeInput">homeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.user.UserProviderConfig">UserProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.reposInput">reposInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.workspaceAccessInput">workspaceAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.workspaceConsumeInput">workspaceConsumeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.aclPrincipalId">aclPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.allowClusterCreate">allowClusterCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.api">api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.disableAsUserDeletion">disableAsUserDeletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.force">force</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.forceDeleteHomeDir">forceDeleteHomeDir</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.forceDeleteRepos">forceDeleteRepos</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.home">home</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.repos">repos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.workspaceAccess">workspaceAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.User.property.workspaceConsume">workspaceConsume</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.user.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.user.User.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.user.User.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.user.User.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.user.User.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.user.User.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.user.User.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.user.User.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.user.User.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.user.User.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.user.User.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.user.User.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.user.User.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.user.User.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.user.User.property.providerConfig"></a>

```typescript
public readonly providerConfig: UserProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference">UserProviderConfigOutputReference</a>

---

##### `aclPrincipalIdInput`<sup>Optional</sup> <a name="aclPrincipalIdInput" id="@cdktn/provider-databricks.user.User.property.aclPrincipalIdInput"></a>

```typescript
public readonly aclPrincipalIdInput: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-databricks.user.User.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowClusterCreateInput`<sup>Optional</sup> <a name="allowClusterCreateInput" id="@cdktn/provider-databricks.user.User.property.allowClusterCreateInput"></a>

```typescript
public readonly allowClusterCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowInstancePoolCreateInput`<sup>Optional</sup> <a name="allowInstancePoolCreateInput" id="@cdktn/provider-databricks.user.User.property.allowInstancePoolCreateInput"></a>

```typescript
public readonly allowInstancePoolCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-databricks.user.User.property.apiInput"></a>

```typescript
public readonly apiInput: string;
```

- *Type:* string

---

##### `databricksSqlAccessInput`<sup>Optional</sup> <a name="databricksSqlAccessInput" id="@cdktn/provider-databricks.user.User.property.databricksSqlAccessInput"></a>

```typescript
public readonly databricksSqlAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableAsUserDeletionInput`<sup>Optional</sup> <a name="disableAsUserDeletionInput" id="@cdktn/provider-databricks.user.User.property.disableAsUserDeletionInput"></a>

```typescript
public readonly disableAsUserDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.user.User.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-databricks.user.User.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `forceDeleteHomeDirInput`<sup>Optional</sup> <a name="forceDeleteHomeDirInput" id="@cdktn/provider-databricks.user.User.property.forceDeleteHomeDirInput"></a>

```typescript
public readonly forceDeleteHomeDirInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forceDeleteReposInput`<sup>Optional</sup> <a name="forceDeleteReposInput" id="@cdktn/provider-databricks.user.User.property.forceDeleteReposInput"></a>

```typescript
public readonly forceDeleteReposInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktn/provider-databricks.user.User.property.forceInput"></a>

```typescript
public readonly forceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `homeInput`<sup>Optional</sup> <a name="homeInput" id="@cdktn/provider-databricks.user.User.property.homeInput"></a>

```typescript
public readonly homeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.user.User.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.user.User.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: UserProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.user.UserProviderConfig">UserProviderConfig</a>

---

##### `reposInput`<sup>Optional</sup> <a name="reposInput" id="@cdktn/provider-databricks.user.User.property.reposInput"></a>

```typescript
public readonly reposInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktn/provider-databricks.user.User.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `workspaceAccessInput`<sup>Optional</sup> <a name="workspaceAccessInput" id="@cdktn/provider-databricks.user.User.property.workspaceAccessInput"></a>

```typescript
public readonly workspaceAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workspaceConsumeInput`<sup>Optional</sup> <a name="workspaceConsumeInput" id="@cdktn/provider-databricks.user.User.property.workspaceConsumeInput"></a>

```typescript
public readonly workspaceConsumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `aclPrincipalId`<sup>Required</sup> <a name="aclPrincipalId" id="@cdktn/provider-databricks.user.User.property.aclPrincipalId"></a>

```typescript
public readonly aclPrincipalId: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-databricks.user.User.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowClusterCreate`<sup>Required</sup> <a name="allowClusterCreate" id="@cdktn/provider-databricks.user.User.property.allowClusterCreate"></a>

```typescript
public readonly allowClusterCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowInstancePoolCreate`<sup>Required</sup> <a name="allowInstancePoolCreate" id="@cdktn/provider-databricks.user.User.property.allowInstancePoolCreate"></a>

```typescript
public readonly allowInstancePoolCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-databricks.user.User.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

---

##### `databricksSqlAccess`<sup>Required</sup> <a name="databricksSqlAccess" id="@cdktn/provider-databricks.user.User.property.databricksSqlAccess"></a>

```typescript
public readonly databricksSqlAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableAsUserDeletion`<sup>Required</sup> <a name="disableAsUserDeletion" id="@cdktn/provider-databricks.user.User.property.disableAsUserDeletion"></a>

```typescript
public readonly disableAsUserDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.user.User.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-databricks.user.User.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktn/provider-databricks.user.User.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forceDeleteHomeDir`<sup>Required</sup> <a name="forceDeleteHomeDir" id="@cdktn/provider-databricks.user.User.property.forceDeleteHomeDir"></a>

```typescript
public readonly forceDeleteHomeDir: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forceDeleteRepos`<sup>Required</sup> <a name="forceDeleteRepos" id="@cdktn/provider-databricks.user.User.property.forceDeleteRepos"></a>

```typescript
public readonly forceDeleteRepos: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktn/provider-databricks.user.User.property.home"></a>

```typescript
public readonly home: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.user.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repos`<sup>Required</sup> <a name="repos" id="@cdktn/provider-databricks.user.User.property.repos"></a>

```typescript
public readonly repos: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-databricks.user.User.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `workspaceAccess`<sup>Required</sup> <a name="workspaceAccess" id="@cdktn/provider-databricks.user.User.property.workspaceAccess"></a>

```typescript
public readonly workspaceAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workspaceConsume`<sup>Required</sup> <a name="workspaceConsume" id="@cdktn/provider-databricks.user.User.property.workspaceConsume"></a>

```typescript
public readonly workspaceConsume: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.user.User.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.user.User.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktn/provider-databricks.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.user.UserConfig.Initializer"></a>

```typescript
import { user } from '@cdktn/provider-databricks'

const userConfig: user.UserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#user_name User#user_name}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.aclPrincipalId">aclPrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#acl_principal_id User#acl_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#active User#active}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.allowClusterCreate">allowClusterCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#allow_cluster_create User#allow_cluster_create}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#allow_instance_pool_create User#allow_instance_pool_create}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.api">api</a></code> | <code>string</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#databricks_sql_access User#databricks_sql_access}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.disableAsUserDeletion">disableAsUserDeletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#disable_as_user_deletion User#disable_as_user_deletion}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#display_name User#display_name}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#external_id User#external_id}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.force">force</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#force User#force}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.forceDeleteHomeDir">forceDeleteHomeDir</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#force_delete_home_dir User#force_delete_home_dir}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.forceDeleteRepos">forceDeleteRepos</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#force_delete_repos User#force_delete_repos}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.home">home</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#home User#home}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.user.UserProviderConfig">UserProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.repos">repos</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#repos User#repos}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.workspaceAccess">workspaceAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#workspace_access User#workspace_access}. |
| <code><a href="#@cdktn/provider-databricks.user.UserConfig.property.workspaceConsume">workspaceConsume</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#workspace_consume User#workspace_consume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.user.UserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.user.UserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.user.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.user.UserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.user.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.user.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.user.UserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-databricks.user.UserConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#user_name User#user_name}.

---

##### `aclPrincipalId`<sup>Optional</sup> <a name="aclPrincipalId" id="@cdktn/provider-databricks.user.UserConfig.property.aclPrincipalId"></a>

```typescript
public readonly aclPrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#acl_principal_id User#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-databricks.user.UserConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#active User#active}.

---

##### `allowClusterCreate`<sup>Optional</sup> <a name="allowClusterCreate" id="@cdktn/provider-databricks.user.UserConfig.property.allowClusterCreate"></a>

```typescript
public readonly allowClusterCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#allow_cluster_create User#allow_cluster_create}.

---

##### `allowInstancePoolCreate`<sup>Optional</sup> <a name="allowInstancePoolCreate" id="@cdktn/provider-databricks.user.UserConfig.property.allowInstancePoolCreate"></a>

```typescript
public readonly allowInstancePoolCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#allow_instance_pool_create User#allow_instance_pool_create}.

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.user.UserConfig.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#api User#api}

---

##### `databricksSqlAccess`<sup>Optional</sup> <a name="databricksSqlAccess" id="@cdktn/provider-databricks.user.UserConfig.property.databricksSqlAccess"></a>

```typescript
public readonly databricksSqlAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#databricks_sql_access User#databricks_sql_access}.

---

##### `disableAsUserDeletion`<sup>Optional</sup> <a name="disableAsUserDeletion" id="@cdktn/provider-databricks.user.UserConfig.property.disableAsUserDeletion"></a>

```typescript
public readonly disableAsUserDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#disable_as_user_deletion User#disable_as_user_deletion}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.user.UserConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#display_name User#display_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-databricks.user.UserConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#external_id User#external_id}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-databricks.user.UserConfig.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#force User#force}.

---

##### `forceDeleteHomeDir`<sup>Optional</sup> <a name="forceDeleteHomeDir" id="@cdktn/provider-databricks.user.UserConfig.property.forceDeleteHomeDir"></a>

```typescript
public readonly forceDeleteHomeDir: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#force_delete_home_dir User#force_delete_home_dir}.

---

##### `forceDeleteRepos`<sup>Optional</sup> <a name="forceDeleteRepos" id="@cdktn/provider-databricks.user.UserConfig.property.forceDeleteRepos"></a>

```typescript
public readonly forceDeleteRepos: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#force_delete_repos User#force_delete_repos}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktn/provider-databricks.user.UserConfig.property.home"></a>

```typescript
public readonly home: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#home User#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.user.UserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.user.UserConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: UserProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.user.UserProviderConfig">UserProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#provider_config User#provider_config}

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktn/provider-databricks.user.UserConfig.property.repos"></a>

```typescript
public readonly repos: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#repos User#repos}.

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktn/provider-databricks.user.UserConfig.property.workspaceAccess"></a>

```typescript
public readonly workspaceAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#workspace_access User#workspace_access}.

---

##### `workspaceConsume`<sup>Optional</sup> <a name="workspaceConsume" id="@cdktn/provider-databricks.user.UserConfig.property.workspaceConsume"></a>

```typescript
public readonly workspaceConsume: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#workspace_consume User#workspace_consume}.

---

### UserProviderConfig <a name="UserProviderConfig" id="@cdktn/provider-databricks.user.UserProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.user.UserProviderConfig.Initializer"></a>

```typescript
import { user } from '@cdktn/provider-databricks'

const userProviderConfig: user.UserProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#workspace_id User#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.user.UserProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/user#workspace_id User#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserProviderConfigOutputReference <a name="UserProviderConfigOutputReference" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktn/provider-databricks'

new user.UserProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.user.UserProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.user.UserProviderConfig">UserProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.user.UserProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: UserProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.user.UserProviderConfig">UserProviderConfig</a>

---



