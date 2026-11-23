# `dataDatabricksLakewatchBuiltinParserVersions` Submodule <a name="`dataDatabricksLakewatchBuiltinParserVersions` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchBuiltinParserVersions <a name="DataDatabricksLakewatchBuiltinParserVersions" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions databricks_lakewatch_builtin_parser_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions(scope: Construct, id: string, config: DataDatabricksLakewatchBuiltinParserVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig">DataDatabricksLakewatchBuiltinParserVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig">DataDatabricksLakewatchBuiltinParserVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksLakewatchBuiltinParserVersionsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchBuiltinParserVersions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isConstruct"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformElement"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformDataSource"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksLakewatchBuiltinParserVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksLakewatchBuiltinParserVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksLakewatchBuiltinParserVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchBuiltinParserVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.builtinParserVersions">builtinParserVersions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `builtinParserVersions`<sup>Required</sup> <a name="builtinParserVersions" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.builtinParserVersions"></a>

```typescript
public readonly builtinParserVersions: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksLakewatchBuiltinParserVersionsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions: dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#name DataDatabricksLakewatchBuiltinParserVersions#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#name DataDatabricksLakewatchBuiltinParserVersions#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}.

---

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig: dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}.

---

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags: dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#key DataDatabricksLakewatchBuiltinParserVersions#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#value DataDatabricksLakewatchBuiltinParserVersions#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#key DataDatabricksLakewatchBuiltinParserVersions#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#value DataDatabricksLakewatchBuiltinParserVersions#value}.

---

### DataDatabricksLakewatchBuiltinParserVersionsConfig <a name="DataDatabricksLakewatchBuiltinParserVersionsConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchBuiltinParserVersionsConfig: dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#parent DataDatabricksLakewatchBuiltinParserVersions#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#page_size DataDatabricksLakewatchBuiltinParserVersions#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#parent DataDatabricksLakewatchBuiltinParserVersions#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#page_size DataDatabricksLakewatchBuiltinParserVersions#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchBuiltinParserVersionsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}.

---

### DataDatabricksLakewatchBuiltinParserVersionsProviderConfig <a name="DataDatabricksLakewatchBuiltinParserVersionsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchBuiltinParserVersionsProviderConfig: dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.get"></a>

```typescript
public get(index: number): DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions</a>[]

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.parserName">parserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.spec">spec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `parserName`<sup>Required</sup> <a name="parserName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.parserName"></a>

```typescript
public readonly parserName: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.spec"></a>

```typescript
public readonly spec: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions</a>

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a>

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags</a>[]

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags</a>

---


### DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParserVersions } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchBuiltinParserVersionsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a>

---



