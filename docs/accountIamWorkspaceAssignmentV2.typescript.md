# `accountIamWorkspaceAssignmentV2` Submodule <a name="`accountIamWorkspaceAssignmentV2` Submodule" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountIamWorkspaceAssignmentV2 <a name="AccountIamWorkspaceAssignmentV2" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2 databricks_account_iam_workspace_assignment_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.Initializer"></a>

```typescript
import { accountIamWorkspaceAssignmentV2 } from '@cdktn/provider-databricks'

new accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2(scope: Construct, id: string, config: AccountIamWorkspaceAssignmentV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config">AccountIamWorkspaceAssignmentV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config">AccountIamWorkspaceAssignmentV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.resetEntitlements">resetEntitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEntitlements` <a name="resetEntitlements" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.resetEntitlements"></a>

```typescript
public resetEntitlements(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccountIamWorkspaceAssignmentV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isConstruct"></a>

```typescript
import { accountIamWorkspaceAssignmentV2 } from '@cdktn/provider-databricks'

accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isTerraformElement"></a>

```typescript
import { accountIamWorkspaceAssignmentV2 } from '@cdktn/provider-databricks'

accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isTerraformResource"></a>

```typescript
import { accountIamWorkspaceAssignmentV2 } from '@cdktn/provider-databricks'

accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.generateConfigForImport"></a>

```typescript
import { accountIamWorkspaceAssignmentV2 } from '@cdktn/provider-databricks'

accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AccountIamWorkspaceAssignmentV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountIamWorkspaceAssignmentV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountIamWorkspaceAssignmentV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccountIamWorkspaceAssignmentV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.effectiveEntitlements">effectiveEntitlements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.entitlementsInput">entitlementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.principalIdInput">principalIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.workspaceIdInput">workspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.entitlements">entitlements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.principalId">principalId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `effectiveEntitlements`<sup>Required</sup> <a name="effectiveEntitlements" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.effectiveEntitlements"></a>

```typescript
public readonly effectiveEntitlements: string[];
```

- *Type:* string[]

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `entitlementsInput`<sup>Optional</sup> <a name="entitlementsInput" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.entitlementsInput"></a>

```typescript
public readonly entitlementsInput: string[];
```

- *Type:* string[]

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: number;
```

- *Type:* number

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: number;
```

- *Type:* number

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.entitlements"></a>

```typescript
public readonly entitlements: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.principalId"></a>

```typescript
public readonly principalId: number;
```

- *Type:* number

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountIamWorkspaceAssignmentV2Config <a name="AccountIamWorkspaceAssignmentV2Config" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.Initializer"></a>

```typescript
import { accountIamWorkspaceAssignmentV2 } from '@cdktn/provider-databricks'

const accountIamWorkspaceAssignmentV2Config: accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.principalId">principalId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#principal_id AccountIamWorkspaceAssignmentV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.entitlements">entitlements</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#entitlements AccountIamWorkspaceAssignmentV2#entitlements}. |
| <code><a href="#@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.workspaceId">workspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#workspace_id AccountIamWorkspaceAssignmentV2#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.principalId"></a>

```typescript
public readonly principalId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#principal_id AccountIamWorkspaceAssignmentV2#principal_id}.

---

##### `entitlements`<sup>Optional</sup> <a name="entitlements" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.entitlements"></a>

```typescript
public readonly entitlements: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#entitlements AccountIamWorkspaceAssignmentV2#entitlements}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.accountIamWorkspaceAssignmentV2.AccountIamWorkspaceAssignmentV2Config.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_iam_workspace_assignment_v2#workspace_id AccountIamWorkspaceAssignmentV2#workspace_id}.

---



