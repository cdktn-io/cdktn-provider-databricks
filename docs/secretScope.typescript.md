# `secretScope` Submodule <a name="`secretScope` Submodule" id="@cdktn/provider-databricks.secretScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretScope <a name="SecretScope" id="@cdktn/provider-databricks.secretScope.SecretScope"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope databricks_secret_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.secretScope.SecretScope.Initializer"></a>

```typescript
import { secretScope } from '@cdktn/provider-databricks'

new secretScope.SecretScope(scope: Construct, id: string, config: SecretScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig">SecretScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.secretScope.SecretScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.secretScope.SecretScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.secretScope.SecretScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig">SecretScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.putKeyvaultMetadata">putKeyvaultMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.resetBackendType">resetBackendType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.resetInitialManagePrincipal">resetInitialManagePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.resetKeyvaultMetadata">resetKeyvaultMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.secretScope.SecretScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.secretScope.SecretScope.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.secretScope.SecretScope.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.secretScope.SecretScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.secretScope.SecretScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.secretScope.SecretScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.secretScope.SecretScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.secretScope.SecretScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.secretScope.SecretScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.secretScope.SecretScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.secretScope.SecretScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.secretScope.SecretScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.secretScope.SecretScope.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.secretScope.SecretScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.secretScope.SecretScope.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.secretScope.SecretScope.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.secretScope.SecretScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.secretScope.SecretScope.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.secretScope.SecretScope.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.secretScope.SecretScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.secretScope.SecretScope.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.secretScope.SecretScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.secretScope.SecretScope.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.secretScope.SecretScope.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.secretScope.SecretScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyvaultMetadata` <a name="putKeyvaultMetadata" id="@cdktn/provider-databricks.secretScope.SecretScope.putKeyvaultMetadata"></a>

```typescript
public putKeyvaultMetadata(value: SecretScopeKeyvaultMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.secretScope.SecretScope.putKeyvaultMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.secretScope.SecretScope.putProviderConfig"></a>

```typescript
public putProviderConfig(value: SecretScopeProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.secretScope.SecretScope.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig">SecretScopeProviderConfig</a>

---

##### `resetBackendType` <a name="resetBackendType" id="@cdktn/provider-databricks.secretScope.SecretScope.resetBackendType"></a>

```typescript
public resetBackendType(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.secretScope.SecretScope.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialManagePrincipal` <a name="resetInitialManagePrincipal" id="@cdktn/provider-databricks.secretScope.SecretScope.resetInitialManagePrincipal"></a>

```typescript
public resetInitialManagePrincipal(): void
```

##### `resetKeyvaultMetadata` <a name="resetKeyvaultMetadata" id="@cdktn/provider-databricks.secretScope.SecretScope.resetKeyvaultMetadata"></a>

```typescript
public resetKeyvaultMetadata(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.secretScope.SecretScope.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretScope resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.secretScope.SecretScope.isConstruct"></a>

```typescript
import { secretScope } from '@cdktn/provider-databricks'

secretScope.SecretScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.secretScope.SecretScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.secretScope.SecretScope.isTerraformElement"></a>

```typescript
import { secretScope } from '@cdktn/provider-databricks'

secretScope.SecretScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.secretScope.SecretScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.secretScope.SecretScope.isTerraformResource"></a>

```typescript
import { secretScope } from '@cdktn/provider-databricks'

secretScope.SecretScope.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.secretScope.SecretScope.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.secretScope.SecretScope.generateConfigForImport"></a>

```typescript
import { secretScope } from '@cdktn/provider-databricks'

secretScope.SecretScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecretScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.secretScope.SecretScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.secretScope.SecretScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.secretScope.SecretScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.secretScope.SecretScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecretScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.keyvaultMetadata">keyvaultMetadata</a></code> | <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference">SecretScopeKeyvaultMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference">SecretScopeProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.backendTypeInput">backendTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.initialManagePrincipalInput">initialManagePrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.keyvaultMetadataInput">keyvaultMetadataInput</a></code> | <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig">SecretScopeProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.backendType">backendType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.initialManagePrincipal">initialManagePrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.secretScope.SecretScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.secretScope.SecretScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.secretScope.SecretScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.secretScope.SecretScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.secretScope.SecretScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.secretScope.SecretScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.secretScope.SecretScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.secretScope.SecretScope.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.secretScope.SecretScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.secretScope.SecretScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.secretScope.SecretScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.secretScope.SecretScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.secretScope.SecretScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.secretScope.SecretScope.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyvaultMetadata`<sup>Required</sup> <a name="keyvaultMetadata" id="@cdktn/provider-databricks.secretScope.SecretScope.property.keyvaultMetadata"></a>

```typescript
public readonly keyvaultMetadata: SecretScopeKeyvaultMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference">SecretScopeKeyvaultMetadataOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.secretScope.SecretScope.property.providerConfig"></a>

```typescript
public readonly providerConfig: SecretScopeProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference">SecretScopeProviderConfigOutputReference</a>

---

##### `backendTypeInput`<sup>Optional</sup> <a name="backendTypeInput" id="@cdktn/provider-databricks.secretScope.SecretScope.property.backendTypeInput"></a>

```typescript
public readonly backendTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.secretScope.SecretScope.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialManagePrincipalInput`<sup>Optional</sup> <a name="initialManagePrincipalInput" id="@cdktn/provider-databricks.secretScope.SecretScope.property.initialManagePrincipalInput"></a>

```typescript
public readonly initialManagePrincipalInput: string;
```

- *Type:* string

---

##### `keyvaultMetadataInput`<sup>Optional</sup> <a name="keyvaultMetadataInput" id="@cdktn/provider-databricks.secretScope.SecretScope.property.keyvaultMetadataInput"></a>

```typescript
public readonly keyvaultMetadataInput: SecretScopeKeyvaultMetadata;
```

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.secretScope.SecretScope.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.secretScope.SecretScope.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: SecretScopeProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig">SecretScopeProviderConfig</a>

---

##### `backendType`<sup>Required</sup> <a name="backendType" id="@cdktn/provider-databricks.secretScope.SecretScope.property.backendType"></a>

```typescript
public readonly backendType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.secretScope.SecretScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialManagePrincipal`<sup>Required</sup> <a name="initialManagePrincipal" id="@cdktn/provider-databricks.secretScope.SecretScope.property.initialManagePrincipal"></a>

```typescript
public readonly initialManagePrincipal: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.secretScope.SecretScope.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.secretScope.SecretScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretScopeConfig <a name="SecretScopeConfig" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.Initializer"></a>

```typescript
import { secretScope } from '@cdktn/provider-databricks'

const secretScopeConfig: secretScope.SecretScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#name SecretScope#name}. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.backendType">backendType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#backend_type SecretScope#backend_type}. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#id SecretScope#id}. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.initialManagePrincipal">initialManagePrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#initial_manage_principal SecretScope#initial_manage_principal}. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.keyvaultMetadata">keyvaultMetadata</a></code> | <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a></code> | keyvault_metadata block. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig">SecretScopeProviderConfig</a></code> | provider_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#name SecretScope#name}.

---

##### `backendType`<sup>Optional</sup> <a name="backendType" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.backendType"></a>

```typescript
public readonly backendType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#backend_type SecretScope#backend_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#id SecretScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialManagePrincipal`<sup>Optional</sup> <a name="initialManagePrincipal" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.initialManagePrincipal"></a>

```typescript
public readonly initialManagePrincipal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#initial_manage_principal SecretScope#initial_manage_principal}.

---

##### `keyvaultMetadata`<sup>Optional</sup> <a name="keyvaultMetadata" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.keyvaultMetadata"></a>

```typescript
public readonly keyvaultMetadata: SecretScopeKeyvaultMetadata;
```

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a>

keyvault_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#keyvault_metadata SecretScope#keyvault_metadata}

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.secretScope.SecretScopeConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: SecretScopeProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig">SecretScopeProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#provider_config SecretScope#provider_config}

---

### SecretScopeKeyvaultMetadata <a name="SecretScopeKeyvaultMetadata" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata.Initializer"></a>

```typescript
import { secretScope } from '@cdktn/provider-databricks'

const secretScopeKeyvaultMetadata: secretScope.SecretScopeKeyvaultMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata.property.dnsName">dnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#dns_name SecretScope#dns_name}. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#resource_id SecretScope#resource_id}. |

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#dns_name SecretScope#dns_name}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#resource_id SecretScope#resource_id}.

---

### SecretScopeProviderConfig <a name="SecretScopeProviderConfig" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig.Initializer"></a>

```typescript
import { secretScope } from '@cdktn/provider-databricks'

const secretScopeProviderConfig: secretScope.SecretScopeProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#workspace_id SecretScope#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/secret_scope#workspace_id SecretScope#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretScopeKeyvaultMetadataOutputReference <a name="SecretScopeKeyvaultMetadataOutputReference" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.Initializer"></a>

```typescript
import { secretScope } from '@cdktn/provider-databricks'

new secretScope.SecretScopeKeyvaultMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretScopeKeyvaultMetadata;
```

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeKeyvaultMetadata">SecretScopeKeyvaultMetadata</a>

---


### SecretScopeProviderConfigOutputReference <a name="SecretScopeProviderConfigOutputReference" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.Initializer"></a>

```typescript
import { secretScope } from '@cdktn/provider-databricks'

new secretScope.SecretScopeProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig">SecretScopeProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.secretScope.SecretScopeProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretScopeProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.secretScope.SecretScopeProviderConfig">SecretScopeProviderConfig</a>

---



