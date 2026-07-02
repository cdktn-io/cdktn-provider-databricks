# `entitlements` Submodule <a name="`entitlements` Submodule" id="@cdktn/provider-databricks.entitlements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Entitlements <a name="Entitlements" id="@cdktn/provider-databricks.entitlements.Entitlements"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements databricks_entitlements}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.entitlements.Entitlements.Initializer"></a>

```typescript
import { entitlements } from '@cdktn/provider-databricks'

new entitlements.Entitlements(scope: Construct, id: string, config?: EntitlementsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig">EntitlementsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.entitlements.Entitlements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.entitlements.Entitlements.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.entitlements.Entitlements.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig">EntitlementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetAllowClusterCreate">resetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetAllowInstancePoolCreate">resetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetDatabricksSqlAccess">resetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetServicePrincipalId">resetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetUserId">resetUserId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetWorkspaceAccess">resetWorkspaceAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.resetWorkspaceConsume">resetWorkspaceConsume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.entitlements.Entitlements.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.entitlements.Entitlements.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.entitlements.Entitlements.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.entitlements.Entitlements.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.entitlements.Entitlements.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.entitlements.Entitlements.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.entitlements.Entitlements.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.entitlements.Entitlements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.entitlements.Entitlements.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.entitlements.Entitlements.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.entitlements.Entitlements.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.entitlements.Entitlements.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.entitlements.Entitlements.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.entitlements.Entitlements.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.entitlements.Entitlements.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.entitlements.Entitlements.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.entitlements.Entitlements.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.entitlements.Entitlements.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.Entitlements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.entitlements.Entitlements.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.entitlements.Entitlements.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.entitlements.Entitlements.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.entitlements.Entitlements.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.entitlements.Entitlements.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.entitlements.Entitlements.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.entitlements.Entitlements.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.entitlements.Entitlements.putProviderConfig"></a>

```typescript
public putProviderConfig(value: EntitlementsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.entitlements.Entitlements.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig">EntitlementsProviderConfig</a>

---

##### `resetAllowClusterCreate` <a name="resetAllowClusterCreate" id="@cdktn/provider-databricks.entitlements.Entitlements.resetAllowClusterCreate"></a>

```typescript
public resetAllowClusterCreate(): void
```

##### `resetAllowInstancePoolCreate` <a name="resetAllowInstancePoolCreate" id="@cdktn/provider-databricks.entitlements.Entitlements.resetAllowInstancePoolCreate"></a>

```typescript
public resetAllowInstancePoolCreate(): void
```

##### `resetDatabricksSqlAccess` <a name="resetDatabricksSqlAccess" id="@cdktn/provider-databricks.entitlements.Entitlements.resetDatabricksSqlAccess"></a>

```typescript
public resetDatabricksSqlAccess(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-databricks.entitlements.Entitlements.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.entitlements.Entitlements.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.entitlements.Entitlements.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetServicePrincipalId` <a name="resetServicePrincipalId" id="@cdktn/provider-databricks.entitlements.Entitlements.resetServicePrincipalId"></a>

```typescript
public resetServicePrincipalId(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktn/provider-databricks.entitlements.Entitlements.resetUserId"></a>

```typescript
public resetUserId(): void
```

##### `resetWorkspaceAccess` <a name="resetWorkspaceAccess" id="@cdktn/provider-databricks.entitlements.Entitlements.resetWorkspaceAccess"></a>

```typescript
public resetWorkspaceAccess(): void
```

##### `resetWorkspaceConsume` <a name="resetWorkspaceConsume" id="@cdktn/provider-databricks.entitlements.Entitlements.resetWorkspaceConsume"></a>

```typescript
public resetWorkspaceConsume(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Entitlements resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.entitlements.Entitlements.isConstruct"></a>

```typescript
import { entitlements } from '@cdktn/provider-databricks'

entitlements.Entitlements.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.entitlements.Entitlements.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.entitlements.Entitlements.isTerraformElement"></a>

```typescript
import { entitlements } from '@cdktn/provider-databricks'

entitlements.Entitlements.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.entitlements.Entitlements.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.entitlements.Entitlements.isTerraformResource"></a>

```typescript
import { entitlements } from '@cdktn/provider-databricks'

entitlements.Entitlements.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.entitlements.Entitlements.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.entitlements.Entitlements.generateConfigForImport"></a>

```typescript
import { entitlements } from '@cdktn/provider-databricks'

entitlements.Entitlements.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Entitlements resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Entitlements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Entitlements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.entitlements.Entitlements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Entitlements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference">EntitlementsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.allowClusterCreateInput">allowClusterCreateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreateInput">allowInstancePoolCreateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.databricksSqlAccessInput">databricksSqlAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig">EntitlementsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.workspaceAccessInput">workspaceAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.workspaceConsumeInput">workspaceConsumeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.allowClusterCreate">allowClusterCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.workspaceAccess">workspaceAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.workspaceConsume">workspaceConsume</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.entitlements.Entitlements.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.entitlements.Entitlements.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.entitlements.Entitlements.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.entitlements.Entitlements.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.entitlements.Entitlements.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.entitlements.Entitlements.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.entitlements.Entitlements.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.entitlements.Entitlements.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.entitlements.Entitlements.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.entitlements.Entitlements.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.entitlements.Entitlements.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.entitlements.Entitlements.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.entitlements.Entitlements.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.entitlements.Entitlements.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.entitlements.Entitlements.property.providerConfig"></a>

```typescript
public readonly providerConfig: EntitlementsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference">EntitlementsProviderConfigOutputReference</a>

---

##### `allowClusterCreateInput`<sup>Optional</sup> <a name="allowClusterCreateInput" id="@cdktn/provider-databricks.entitlements.Entitlements.property.allowClusterCreateInput"></a>

```typescript
public readonly allowClusterCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowInstancePoolCreateInput`<sup>Optional</sup> <a name="allowInstancePoolCreateInput" id="@cdktn/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreateInput"></a>

```typescript
public readonly allowInstancePoolCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databricksSqlAccessInput`<sup>Optional</sup> <a name="databricksSqlAccessInput" id="@cdktn/provider-databricks.entitlements.Entitlements.property.databricksSqlAccessInput"></a>

```typescript
public readonly databricksSqlAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-databricks.entitlements.Entitlements.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.entitlements.Entitlements.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.entitlements.Entitlements.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: EntitlementsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig">EntitlementsProviderConfig</a>

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktn/provider-databricks.entitlements.Entitlements.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-databricks.entitlements.Entitlements.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `workspaceAccessInput`<sup>Optional</sup> <a name="workspaceAccessInput" id="@cdktn/provider-databricks.entitlements.Entitlements.property.workspaceAccessInput"></a>

```typescript
public readonly workspaceAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workspaceConsumeInput`<sup>Optional</sup> <a name="workspaceConsumeInput" id="@cdktn/provider-databricks.entitlements.Entitlements.property.workspaceConsumeInput"></a>

```typescript
public readonly workspaceConsumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowClusterCreate`<sup>Required</sup> <a name="allowClusterCreate" id="@cdktn/provider-databricks.entitlements.Entitlements.property.allowClusterCreate"></a>

```typescript
public readonly allowClusterCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowInstancePoolCreate`<sup>Required</sup> <a name="allowInstancePoolCreate" id="@cdktn/provider-databricks.entitlements.Entitlements.property.allowInstancePoolCreate"></a>

```typescript
public readonly allowInstancePoolCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databricksSqlAccess`<sup>Required</sup> <a name="databricksSqlAccess" id="@cdktn/provider-databricks.entitlements.Entitlements.property.databricksSqlAccess"></a>

```typescript
public readonly databricksSqlAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-databricks.entitlements.Entitlements.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.entitlements.Entitlements.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.entitlements.Entitlements.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.entitlements.Entitlements.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `workspaceAccess`<sup>Required</sup> <a name="workspaceAccess" id="@cdktn/provider-databricks.entitlements.Entitlements.property.workspaceAccess"></a>

```typescript
public readonly workspaceAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workspaceConsume`<sup>Required</sup> <a name="workspaceConsume" id="@cdktn/provider-databricks.entitlements.Entitlements.property.workspaceConsume"></a>

```typescript
public readonly workspaceConsume: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entitlements.Entitlements.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.entitlements.Entitlements.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EntitlementsConfig <a name="EntitlementsConfig" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.Initializer"></a>

```typescript
import { entitlements } from '@cdktn/provider-databricks'

const entitlementsConfig: entitlements.EntitlementsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.allowClusterCreate">allowClusterCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#allow_cluster_create Entitlements#allow_cluster_create}. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#allow_instance_pool_create Entitlements#allow_instance_pool_create}. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#databricks_sql_access Entitlements#databricks_sql_access}. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#group_id Entitlements#group_id}. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#id Entitlements#id}. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig">EntitlementsProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#service_principal_id Entitlements#service_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#user_id Entitlements#user_id}. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.workspaceAccess">workspaceAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#workspace_access Entitlements#workspace_access}. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.workspaceConsume">workspaceConsume</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#workspace_consume Entitlements#workspace_consume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowClusterCreate`<sup>Optional</sup> <a name="allowClusterCreate" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.allowClusterCreate"></a>

```typescript
public readonly allowClusterCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#allow_cluster_create Entitlements#allow_cluster_create}.

---

##### `allowInstancePoolCreate`<sup>Optional</sup> <a name="allowInstancePoolCreate" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.allowInstancePoolCreate"></a>

```typescript
public readonly allowInstancePoolCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#allow_instance_pool_create Entitlements#allow_instance_pool_create}.

---

##### `databricksSqlAccess`<sup>Optional</sup> <a name="databricksSqlAccess" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.databricksSqlAccess"></a>

```typescript
public readonly databricksSqlAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#databricks_sql_access Entitlements#databricks_sql_access}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#group_id Entitlements#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#id Entitlements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: EntitlementsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig">EntitlementsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#provider_config Entitlements#provider_config}

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#service_principal_id Entitlements#service_principal_id}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#user_id Entitlements#user_id}.

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.workspaceAccess"></a>

```typescript
public readonly workspaceAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#workspace_access Entitlements#workspace_access}.

---

##### `workspaceConsume`<sup>Optional</sup> <a name="workspaceConsume" id="@cdktn/provider-databricks.entitlements.EntitlementsConfig.property.workspaceConsume"></a>

```typescript
public readonly workspaceConsume: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#workspace_consume Entitlements#workspace_consume}.

---

### EntitlementsProviderConfig <a name="EntitlementsProviderConfig" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig.Initializer"></a>

```typescript
import { entitlements } from '@cdktn/provider-databricks'

const entitlementsProviderConfig: entitlements.EntitlementsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#workspace_id Entitlements#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/entitlements#workspace_id Entitlements#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EntitlementsProviderConfigOutputReference <a name="EntitlementsProviderConfigOutputReference" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.Initializer"></a>

```typescript
import { entitlements } from '@cdktn/provider-databricks'

new entitlements.EntitlementsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig">EntitlementsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.entitlements.EntitlementsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EntitlementsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.entitlements.EntitlementsProviderConfig">EntitlementsProviderConfig</a>

---



